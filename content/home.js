/**
 * Home page copy. `tools` link to tool pages by id; `article` is rendered by
 * components/ToolArticle.jsx (same block types as content/articles.js).
 */
export const HOME = {
  h1: 'Free QR Code Generator Online',
  intro: [
    'Create QR codes quickly with GenerateQRFast. Choose a tool for URLs, WiFi, text, WhatsApp, contact details, email, SMS, phone numbers, locations, images, videos, and more.',
    'Select the QR code type you need, enter the required information, generate your code, and download it for print or digital use.',
  ],

  toolsHeading: 'Choose a QR Code Generator',
  tools: [
    { id: 'url', name: 'URL QR Code Generator', text: 'Turn any website or web link into a scannable QR code.' },
    { id: 'text', name: 'Text QR Code Generator', text: 'Create a QR code for plain text, notes, messages, or instructions.' },
    { id: 'wifi', name: 'WiFi QR Code Generator', text: 'Share WiFi network details with a simple scan.' },
    {
      id: 'whatsapp',
      name: 'WhatsApp QR Code Generator',
      text: 'Create a QR code that helps users start a WhatsApp conversation.',
    },
    {
      id: 'google-review',
      name: 'Google Review QR Code',
      text: 'Turn your Google review link into a QR code for customer feedback.',
    },
    {
      id: 'vcard',
      name: 'vCard QR Code Generator',
      text: 'Share your name, phone number, email, company, and other contact details.',
    },
    {
      id: 'email',
      name: 'Email QR Code Generator',
      text: 'Create a QR code for an email address with an optional subject and message.',
    },
    { id: 'sms', name: 'SMS QR Code Generator', text: 'Generate a QR code for a phone number and pre-filled text message.' },
    { id: 'phone', name: 'Phone Number QR Code Generator', text: 'Create a scan-to-call QR code for your phone number.' },
    {
      id: 'location',
      name: 'Location QR Code Generator',
      text: 'Turn a map location or Google Maps link into a scannable QR code.',
    },
    { id: 'image', name: 'Image to QR Code', text: 'Create a QR code that opens a photo, graphic, or other image.' },
    { id: 'video', name: 'Video to QR Code', text: 'Share videos through a QR code that users can scan and watch.' },
  ],

  article: [
    {
      heading: 'How to Create a QR Code',
      blocks: [
        {
          steps: [
            'Choose the QR code generator you need.',
            'Enter your information.',
            'Generate the QR code.',
            'Scan it to test the result.',
            'Download and use it.',
          ],
        },
      ],
    },
    {
      heading: 'Which QR Code Should You Use?',
      blocks: [
        'Use a URL QR code for websites, WiFi QR code for network access, and vCard QR code for contact details.',
        'Choose WhatsApp, SMS, email, or phone QR codes when you want people to contact you directly.',
        'For physical destinations, use the Location QR Code Generator. Images and videos can be shared through their dedicated QR tools.',
      ],
    },
    {
      heading: 'Where Can You Use QR Codes?',
      blocks: [
        'QR codes can be added to:',
        [
          'Business cards',
          'Flyers and posters',
          'Product packaging',
          'Menus',
          'Receipts',
          'Signs',
          'Invitations',
          'Event materials',
          'Brochures',
          'Instruction sheets',
        ],
        'They can also be used in digital documents and presentations.',
      ],
    },
    {
      heading: 'Tips for Better QR Codes',
      variant: 'tips',
      blocks: [
        'Always test your QR code before publishing or printing it.',
        'Use strong contrast, leave enough clear space around the code, and make sure it is large enough to scan.',
        'Also check the information inside the code, especially website links, phone numbers, email addresses, WiFi details, and locations.',
      ],
    },
  ],

  faqs: [
    {
      q: 'What is a QR code generator?',
      a: 'A QR code generator converts information such as a URL, text, phone number, contact details, or location into a scannable QR code.',
    },
    {
      q: 'Can I create QR codes for free?',
      a: 'Yes. GenerateQRFast provides free tools for creating different types of QR codes.',
    },
    {
      q: 'Which QR code generator should I choose?',
      a: 'Choose the tool based on what you want users to do after scanning, such as open a website, connect to WiFi, call, message, or view a location.',
    },
    {
      q: 'Should I test my QR code?',
      a: 'Yes. Always scan the finished code before using it to make sure the correct information or destination opens.',
    },
  ],

  cta: {
    heading: 'Create Your QR Code',
    text: 'Choose the QR code tool you need, enter your information, and generate your code in a few simple steps.',
  },
};
