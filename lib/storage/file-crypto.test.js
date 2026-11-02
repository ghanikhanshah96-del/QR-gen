import test from 'node:test';
import assert from 'node:assert/strict';
import { openFile, sealFile } from './file-crypto.js';

const sample = () => new File([new Uint8Array([1, 2, 3, 250])], 'menu café.pdf', { type: 'application/pdf' });

test('a sealed file opens with its key', async () => {
  const { sealed, key } = await sealFile(sample());
  const opened = await openFile(await sealed.arrayBuffer(), key);
  assert.equal(opened.name, 'menu café.pdf');
  assert.equal(opened.type, 'application/pdf');
  assert.deepEqual([...opened.bytes], [1, 2, 3, 250]);
});

test('the file name is not readable in the sealed bytes', async () => {
  const { sealed } = await sealFile(sample());
  const text = new TextDecoder('latin1').decode(await sealed.arrayBuffer());
  assert.equal(text.includes('menu'), false);
});

test('a wrong key is rejected', async () => {
  const { sealed } = await sealFile(sample());
  const { key: otherKey } = await sealFile(sample());
  await assert.rejects(openFile(await sealed.arrayBuffer(), otherKey));
});

test('changed data is rejected', async () => {
  const { sealed, key } = await sealFile(sample());
  const bytes = new Uint8Array(await sealed.arrayBuffer());
  bytes[bytes.length - 1] ^= 1;
  await assert.rejects(openFile(bytes.buffer, key));
});
