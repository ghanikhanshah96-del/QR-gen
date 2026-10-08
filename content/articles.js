/**
 * Long-form SEO articles shown below the generator on each tool page, keyed by tool id.
 * Rendered by components/ToolArticle.jsx — see that file for the block types.
 */
export const ARTICLES = {
  url: [
    {
      heading: 'What Is a URL QR Code?',
      blocks: [
        'A URL QR code is a QR code that contains a web address. When someone scans it with a compatible phone camera or QR scanner, they can open the linked page in their browser.',
        'It removes the need to manually type a website address. This makes QR codes useful when you want to connect printed materials with online content.',
        'For example, a business can place a QR code on a flyer that leads directly to a product page. A restaurant can link a printed card to its online menu, while an event organizer can send visitors to a registration page.',
      ],
    },
    {
      heading: 'Where Can You Use a Website QR Code?',
      blocks: [
        'A QR code for a website can be used anywhere people may want quick access to an online page.',
        'Common uses include business cards, posters, brochures, packaging, menus, storefront signs, event materials, presentations, product labels, receipts, and advertisements.',
        'You can also use a link QR code for:',
        [
          'Landing pages and promotions',
          'Online stores and product pages',
          'Google Forms and surveys',
          'Appointment or booking pages',
          'Social media profiles',
          'Event registration pages',
          'Online menus',
          'Help and support pages',
        ],
        'The destination does not have to be your website homepage. You can create a QR code for a specific page if that gives the user a faster path to what they need.',
      ],
    },
    {
      heading: 'Why Convert a Link to a QR Code?',
      blocks: [
        'Links work well online, but they are less convenient on printed materials.',
        'A QR code turns a URL into something a phone can scan in seconds. Instead of asking someone to remember or type a web address, you can send them directly to the intended page.',
        'This is especially useful for long URLs or pages that are difficult to enter manually.',
      ],
    },
    {
      heading: 'Tips for Creating a Reliable URL QR Code',
      variant: 'tips',
      blocks: [
        'Always test the QR code before publishing or printing it. A small typo in the destination URL can send visitors to the wrong page or make the link unusable.',
        'Use a web page that works well on mobile devices because most people will scan the code from a smartphone.',
        'Keep strong contrast between the QR code and its background. Avoid placing important graphics too close to the code, and leave enough clear space around it for scanners to recognize the pattern.',
        'If you plan to print the QR code in large quantities, test a physical sample first. Scan it from the same distance your customers or visitors are likely to use.',
      ],
    },
    {
      heading: 'URL QR Codes for Print and Digital Use',
      blocks: [
        'A URL QR code is not limited to printed material.',
        'You can include it in presentations, digital displays, PDFs, social graphics, email materials, or other visual content where scanning is convenient.',
        'For print, make sure the code is large and clear enough to scan. For digital use, avoid shrinking the image until the individual QR pattern becomes difficult to distinguish.',
      ],
    },
    {
      heading: 'Can You Make a QR Code for Any Website?',
      blocks: [
        'You can create a QR code for most public web addresses that can be opened normally in a browser.',
        'This may include websites, blog posts, product pages, online documents, forms, videos, social profiles, booking systems, and other public URLs.',
        'A QR code does not bypass passwords, account permissions, or access restrictions. If the destination requires a login, people who scan the code will still need the necessary access.',
      ],
    },
    {
      heading: 'Does a URL QR Code Expire?',
      blocks: [
        'A standard static URL QR code stores the destination address in the code itself and does not have a built-in expiration date.',
        'However, the destination still needs to remain available. If you delete the page, change its URL, or allow the domain to expire, the QR code may still scan but it will no longer lead visitors to the intended content.',
        'For long-term printed materials, use a stable URL that you expect to keep active.',
      ],
    },
    {
      heading: 'Should I Test My QR Code Before Printing It?',
      blocks: [
        'Yes. Always scan the finished QR code with at least one real phone before printing or distributing it.',
        'Check that the correct page opens, the site loads properly on mobile, and the code remains easy to scan at its intended size.',
        'Testing a few seconds before printing can prevent mistakes that are difficult or expensive to correct later.',
      ],
    },
  ],

  text: [
    {
      heading: "What Is a Text QR Code?",
      blocks: [
        "A text QR code stores written information inside the QR code itself.",
        "When someone scans the code, the encoded text can be displayed by their phone or QR scanner without requiring them to visit a website.",
        "This makes text QR codes useful when the information needs to stay simple and easy to access.",
        "For example, you could create a QR code containing product instructions, an event message, a short notice, or a reference number.",
      ],
    },
    {
      heading: "What Can You Put in a Text QR Code?",
      blocks: [
        "A text QR code can contain many types of written information, including:",
        [
          "Short messages",
          "Instructions",
          "Product information",
          "Serial or reference numbers",
          "Event details",
          "Contact notes",
          "WiFi instructions",
          "Classroom information",
          "Labels and identifiers",
          "Short announcements",
        ],
        "For structured information such as a website, phone number, email, or WiFi network, a dedicated QR code generator may provide a better experience.",
      ],
    },
    {
      heading: "Why Use a Plain Text QR Code?",
      blocks: [
        "Plain text QR codes are useful when you want someone to read information without sending them to another page.",
        "The message is stored directly in the code, so there is no need to maintain a website or destination URL for basic text content.",
        "This can be helpful for printed instructions, packaging, internal labels, educational materials, exhibits, events, and signs.",
      ],
    },
    {
      heading: "Does a Text QR Code Need Internet Access?",
      blocks: [
        "The text itself is encoded in the QR code rather than stored on a web page.",
        "In many cases, a compatible device can read that text without opening an online destination. The exact scanning experience depends on the phone or QR reader being used.",
        "This is one of the main differences between a text QR code and a URL QR code.",
      ],
    },
    {
      heading: "How Much Text Can a QR Code Hold?",
      blocks: [
        "QR codes can store a substantial amount of text, but adding more characters makes the pattern denser.",
        "A dense QR code may need to be displayed or printed at a larger size to remain easy to scan.",
        "For the best experience, keep the message as short as practical. If you need to share a long article, document, or large block of information, it may be better to host the content online and create a URL QR code instead.",
      ],
    },
    {
      heading: "Tips for Making a Text QR Code Easy to Scan",
      variant: "tips",
      blocks: [
        "Keep your text concise whenever possible. Shorter content usually produces a cleaner QR pattern.",
        "Before downloading the code, check the text carefully. A static QR code preserves the information entered when it is created, so a spelling mistake will also be stored in the finished code.",
        "Use strong contrast between the QR code and its background, and leave clear space around the edges.",
        "If you plan to print the code, test a sample with a real phone before producing multiple copies.",
      ],
    },
    {
      heading: "Common Uses for a Text QR Code",
      blocks: [
        {
          cards: [
            { title: "Product Instructions", body: "Add simple setup, care, or safety information to packaging or labels." },
            { title: "Events", body: "Share short instructions, schedules, booth information, or attendee messages." },
            {
              title: "Education",
              body: "Teachers can use text QR codes for clues, classroom activities, short questions, or additional notes.",
            },
            {
              title: "Inventory and Labels",
              body: "A QR code can hold an identifier, reference number, internal note, or short description.",
            },
            {
              title: "Signs and Notices",
              body: "Use a QR code to provide additional written information without filling the entire sign with text.",
            },
          ],
        },
      ],
    },
    {
      heading: "Text QR Code vs URL QR Code",
      blocks: [
        "A text QR code and a URL QR code may look similar, but they serve different purposes.",
        "A text QR code stores the written message itself.",
        "A URL QR code stores a web address and directs the scanner to an online page.",
        "Use a text QR code when the information is short and does not require a website. Use a URL QR code when you want to send people to a page that may contain more information or change over time.",
      ],
    },
    {
      heading: "Can a Text QR Code Expire?",
      blocks: [
        "A standard static text QR code does not have a built-in expiration date because the message is stored directly inside the code.",
        "As long as the QR image remains readable and the scanning device supports standard QR codes, the stored text can continue to be read.",
        "Physical damage, very small printing, poor contrast, or heavy image compression can make a QR code harder to scan.",
      ],
    },
  ],

  wifi: [
    {
      heading: "What Is a WiFi QR Code?",
      blocks: [
        "A WiFi QR code stores the information a device needs to identify a wireless network.",
        "Instead of manually entering a network name and password, a user can scan the code with a compatible phone. The device may then show an option to connect to that WiFi network.",
        "This is especially useful when the password is long, contains special characters, or needs to be shared with many people.",
      ],
    },
    {
      heading: "Where Can You Use a WiFi QR Code?",
      blocks: [
        "WiFi QR codes work well anywhere visitors regularly ask for internet access.",
        {
          cards: [
            {
              title: "Home WiFi",
              body: "Place a printed QR code in a guest room or common area so visitors can connect without asking for the password.",
            },
            {
              title: "Cafés and Restaurants",
              body: "Display the code near the counter, on a menu, or at a table to make guest WiFi easier to access.",
            },
            {
              title: "Offices",
              body: "Use a separate QR code for a guest network so visitors, clients, and temporary staff can connect without manually entering credentials.",
            },
            {
              title: "Hotels and Vacation Rentals",
              body: "Add a WiFi QR code to a welcome card, information sheet, or room guide.",
            },
            {
              title: "Events",
              body: "Provide wireless access at conferences, meetings, exhibitions, workshops, or private events.",
            },
            {
              title: "Schools and Shared Workspaces",
              body: "A QR code can simplify network access for approved users when many people need the same WiFi credentials.",
            },
          ],
        },
      ],
    },
    {
      heading: "Why Use a QR Code for WiFi Access?",
      blocks: [
        "Typing WiFi passwords on a phone can be inconvenient, especially when the password is long or complex.",
        "A QR code provides a faster way to share the same network details with multiple people.",
        "It can also reduce common mistakes such as:",
        [
          "Entering the wrong password",
          "Confusing uppercase and lowercase characters",
          "Selecting the wrong network",
          "Mistyping special characters",
          "Forgetting the WiFi name",
        ],
        "For businesses and guest spaces, it also saves staff from repeatedly giving out the same network information.",
      ],
    },
    {
      heading: "Check Your WiFi Details Before Generating the Code",
      blocks: [
        "The QR code will only work correctly if the network information is accurate.",
        "Pay particular attention to the SSID, which is the name of your WiFi network. Enter it exactly as configured on the router.",
        "The password must also match the network credentials. WiFi passwords are case-sensitive, so uppercase letters, lowercase letters, numbers, and symbols need to be entered correctly.",
        "Choose the security option that matches your network settings.",
        "If you are unsure which security type your network uses, check the router settings or the network information on a connected device.",
      ],
    },
    {
      heading: "What Makes a Good WiFi QR Code Generator?",
      blocks: [
        "For most users, the best WiFi QR code generator is one that keeps the process simple and clearly separates the network name, password, and security settings.",
        "The finished code should also be easy to download and test.",
        "A useful generator should help you create the code without adding unnecessary steps between entering the network details and scanning the result.",
      ],
    },
    {
      heading: "Is It Safe to Put a WiFi Password in a QR Code?",
      blocks: [
        "A WiFi QR code can contain the credentials required to connect to the network.",
        "That means anyone who can access and scan the code may potentially be able to use those credentials.",
        { note: "Treat the QR code like the password itself." },
        "Avoid posting a private-network QR code publicly if you do not want unknown visitors connecting to the network. Businesses and shared spaces may prefer to use a separate guest WiFi network rather than their main internal network.",
        "If you change the WiFi password, create a new QR code with the updated information.",
      ],
    },
    {
      heading: "Should I Use a Guest WiFi Network?",
      blocks: [
        "A guest network can be a practical option when you regularly provide internet access to customers, visitors, or short-term guests.",
        "It keeps visitor access separate from the main network used by personal devices, staff systems, or other internal equipment.",
        "If your router supports guest networking, you can create a QR code specifically for that network and replace it whenever the credentials change.",
      ],
    },
    {
      heading: "Can I Print a WiFi QR Code?",
      blocks: [
        "Yes. A WiFi QR code can be printed on signs, cards, menus, guest information sheets, posters, or other materials.",
        "Before printing many copies:",
        [
          "Scan the final code",
          "Check the WiFi network name",
          "Confirm that the connection works",
          "Keep enough empty space around the QR code",
          "Use strong contrast between the code and background",
          "Avoid printing it too small",
        ],
        "Testing a physical sample is especially important if the code will be viewed from a distance.",
      ],
    },
    {
      heading: "Why Is My WiFi QR Code Not Working?",
      blocks: [
        "If a phone cannot connect after scanning, check the network information first.",
        "Common causes include:",
        [
          "Incorrect WiFi password",
          "Misspelled network name",
          "Wrong security setting",
          "Network is unavailable",
          "Weak WiFi signal",
          "Hidden network settings do not match",
          "Device does not support the expected QR connection behavior",
        ],
        "Generate a new code after correcting the network information and test it again.",
      ],
    },
    {
      heading: "Do WiFi QR Codes Expire?",
      blocks: [
        "A standard WiFi QR code does not normally expire on its own.",
        "However, it depends on the network information stored in the code.",
        "If you change the WiFi name, password, or security settings, the old QR code may no longer connect users successfully. Generate a new one whenever the network credentials change.",
      ],
    },
  ],

  whatsapp: [
    {
      heading: "How Does a WhatsApp QR Code Work?",
      blocks: [
        "A QR code for WhatsApp can contain a link connected to your WhatsApp number.",
        "When someone scans the code with a compatible phone camera or QR reader, the link can open WhatsApp and take the user to a conversation with the selected number.",
        "The person still chooses whether to send a message.",
        "This makes the code useful when you want to move someone from a printed sign, product package, business card, or other physical material into a WhatsApp conversation without asking them to type your number.",
      ],
    },
    {
      heading: "Enter Your WhatsApp Number Correctly",
      blocks: [
        "The phone number is the most important part of the QR code.",
        "Use the full international number, including the country code. Avoid adding an incorrect country prefix because the generated link may point to the wrong number or fail to open the intended conversation.",
        "For example, a U.S. number needs the 1 country code before the rest of the number.",
        "After generating the code, scan it yourself and confirm that the correct WhatsApp account opens.",
      ],
    },
    {
      heading: "Add a Pre-Filled WhatsApp Message",
      blocks: [
        "A pre-filled message can make the first step easier for the person scanning your code.",
        "Instead of opening an empty conversation, the user can see a prepared message that they can review, edit, and send.",
        "For example:",
        {
          cards: [
            { title: "Restaurant", body: "“I’d like to book a table.”" },
            { title: "Online seller", body: "“I have a question about this product.”" },
            { title: "Service business", body: "“I’d like to request a quote.”" },
            { title: "Event organizer", body: "“I’d like more information about the event.”" },
          ],
        },
        "Keep the message short and relevant. The goal is to make starting the conversation easier, not to write the entire conversation for the customer.",
      ],
    },
    {
      heading: "Where Can You Use a WhatsApp QR Code?",
      blocks: [
        "A QR code generator for WhatsApp can be useful anywhere customers or visitors may want a quick way to contact you.",
        {
          cards: [
            {
              title: "Business Cards",
              body: "Add the code next to your phone number so a customer can scan it and start a conversation.",
            },
            {
              title: "Product Packaging",
              body: "Let buyers contact your business for product questions, support, installation help, or other assistance.",
            },
            {
              title: "Storefronts",
              body: "Display the QR code near an entrance, counter, or checkout area for inquiries and customer service.",
            },
            {
              title: "Menus and Table Cards",
              body: "Restaurants and cafés can provide another way for customers to ask questions, request information, or contact the business.",
            },
            { title: "Flyers and Posters", body: "Turn printed advertising into a direct path to a WhatsApp conversation." },
            {
              title: "Events and Trade Shows",
              body: "Visitors can scan your code instead of manually saving contact information.",
            },
          ],
        },
      ],
    },
    {
      heading: "WhatsApp QR Codes for Customer Support",
      blocks: [
        "WhatsApp QR codes can be particularly useful when your business already handles customer conversations through WhatsApp.",
        "For example, you might create separate printed materials for:",
        [
          "General inquiries",
          "Product questions",
          "Appointment requests",
          "Sales conversations",
          "Booking inquiries",
          "Event information",
          "Customer support",
        ],
        "A clear label beside the QR code helps users understand what will happen when they scan it.",
        "Instead of printing only the code, add a short instruction such as:",
        { note: "Scan to chat with us on WhatsApp" },
        "This removes uncertainty and gives the user a reason to scan.",
      ],
    },
    {
      heading: "WhatsApp QR Code vs Phone Number QR Code",
      blocks: [
        "These two QR code types serve different purposes.",
        "A phone number QR code normally helps users open their phone dialer with a number ready to call.",
        "A WhatsApp QR code is designed to help users reach the number through WhatsApp.",
        "Use the WhatsApp option when messaging is the intended action. Use a phone number QR code when you want people to make a regular phone call.",
      ],
    },
    {
      heading: "WhatsApp QR Code vs WhatsApp Web QR Code",
      blocks: [
        "They are also not the same thing.",
        "The QR code on WhatsApp Web is used to connect your WhatsApp account to a browser or another supported device.",
        "A customer-facing WhatsApp QR code is intended to help someone reach your account or start a conversation.",
        "If your goal is customer contact, use the contact/chat QR code rather than a WhatsApp Web login code.",
      ],
    },
    {
      heading: "Does Someone Need to Save My Number First?",
      blocks: [
        "A properly created WhatsApp contact link can allow someone to open a conversation without manually adding the number to their contacts first.",
        "This is one reason businesses use WhatsApp QR codes on offline materials. The scan removes several steps between seeing your contact information and opening the conversation.",
      ],
    },
    {
      heading: "Tips for a Better WhatsApp QR Code",
      blocks: [
        "Before sharing your code, take a moment to check the following:",
        [
          "Confirm the country code.",
          "Check every digit in the phone number.",
          "Test the QR code on a real phone.",
          "Keep good contrast between the code and background.",
          "Leave clear space around the QR pattern.",
          "Avoid making the printed code too small.",
          "Add a clear call to action beside it.",
          "Replace printed codes if the WhatsApp number changes.",
        ],
        "If you include a pre-filled message, read it once from the customer's point of view before publishing it.",
      ],
    },
    {
      heading: "Is It Safe to Share a WhatsApp QR Code?",
      blocks: [
        "A public WhatsApp QR code makes it easier for people who see the code to contact the linked number.",
        "For a business number, that may be exactly what you want. For a personal number, consider where you publish the code and who will be able to scan it.",
        "Avoid placing private contact information in locations where you do not want unknown people to access it.",
      ],
    },
    {
      heading: "Does a WhatsApp QR Code Expire?",
      blocks: [
        "A static QR code that contains a working WhatsApp link does not need to change simply because time has passed.",
        "However, the information behind it still matters.",
        "If you change your phone number or the linked destination no longer works, printed copies can become outdated. Test important QR codes periodically, especially if they are used on permanent signs or long-running marketing materials.",
      ],
    },
  ],

  "google-review": [
    {
      heading: "What Is a Google Review QR Code?",
      blocks: [
        "A Google Review QR Code is a scannable code that directs customers to the review page associated with a business.",
        "Instead of asking someone to search for your company, find the correct listing, open the review section, and then leave feedback, the QR code shortens the journey.",
        "The customer scans the code, opens the destination, and can choose whether to leave a review.",
        "This makes it practical for businesses that meet customers in person and want a simple way to request honest feedback after a real experience.",
      ],
    },
    {
      heading: "How to Get Your Google Review Link",
      blocks: [
        "Before using the Google review QR code generator, you need the link that points customers to your review page.",
        "You can get the link from your Google Business Profile.",
        "Open your Business Profile, find the option for requesting or getting more reviews, and copy the review link provided by Google.",
        "Once you have that link, paste it into the tool above to turn it into a QR code.",
        "Keep the original review link saved somewhere safe in case you want to create another code later.",
      ],
    },
    {
      heading: "Where Can You Use a Google Review QR Code?",
      blocks: [
        "A review QR code works best at points where the customer has already interacted with your business.",
        {
          cards: [
            {
              title: "Receipts",
              body: "Add a small QR code near the bottom of a printed receipt with a simple message asking customers to share their experience.",
            },
            {
              title: "Checkout Counters",
              body: "Place the code where customers can easily scan it after completing a purchase or service.",
            },
            {
              title: "Thank-You Cards",
              body: "Include a review request on cards placed inside orders, packages, or service folders.",
            },
            {
              title: "Restaurants and Cafés",
              body: "A small table card, receipt, or counter display can give guests a convenient way to leave feedback.",
            },
            {
              title: "Hotels and Rental Properties",
              body: "Place the code on checkout materials or guest information cards where visitors can access it after their stay.",
            },
            {
              title: "Salons and Service Businesses",
              body: "Add the QR code to appointment cards, follow-up materials, or reception displays.",
            },
            {
              title: "Events and Local Businesses",
              body: "Use it on printed materials when customers have had a genuine experience.",
            },
          ],
        },
      ],
    },
    {
      heading: "Why Use a QR Code for Google Reviews?",
      blocks: [
        "A review request is easier to act on when the customer does not have to search for the business manually.",
        "A QR code for Google reviews can reduce the number of steps between the request and the review page.",
        "This can be especially useful on physical materials, where a normal clickable link is not practical.",
        "It also gives you one consistent destination to use across multiple materials such as receipts, cards, signs, and packaging.",
      ],
    },
    {
      heading: "How to Make a Google Review QR Code",
      blocks: [
        "If you are wondering how to make a Google review QR code, the process has two parts.",
        "First, obtain the official review link for your business. Second, convert that link into a QR code.",
        "The QR code itself does not create the review or submit anything on behalf of the customer. It simply helps the person reach the appropriate review page more quickly.",
        "After generating the code, scan it from the same type of printed or digital material where you plan to use it.",
      ],
    },
    {
      heading: "Add a Clear Message Beside the QR Code",
      blocks: [
        "A QR code is more useful when customers know what they will get after scanning it.",
        "Instead of displaying a code by itself, add a short instruction nearby.",
        "Examples include:",
        { chips: ["Scan to leave us a review", "Share your experience", "Tell us how we did", "Leave your feedback on Google"] },
        "Keep the message neutral and simple.",
        "The goal is to invite genuine feedback, not tell customers what rating or wording to use.",
      ],
    },
    {
      heading: "Ask for Honest Reviews, Not Positive Reviews",
      blocks: [
        "Businesses should ask customers for genuine feedback rather than trying to influence the rating they leave.",
        "Do not offer money, discounts, free products, gifts, or other rewards in exchange for reviews.",
        "You should also avoid requesting reviews only from customers you expect to leave positive feedback while discouraging unhappy customers from reviewing.",
        "A good review request gives every real customer the same opportunity to share an honest experience.",
      ],
    },
    {
      heading: "Can I Offer a Discount for Scanning the Review QR Code?",
      blocks: [
        "You should not offer a discount, free item, payment, or another incentive in exchange for a Google review.",
        "The QR code should simply provide convenient access to the review page.",
        "If you run promotions or loyalty programs, keep them separate from the request to leave a review.",
      ],
    },
    {
      heading: "Make Sure the QR Code Opens the Right Business",
      blocks: [
        "Businesses can have similar names, multiple locations, or more than one Business Profile.",
        "Always scan your finished code before putting it on signs or printed materials.",
        "Check that:",
        [
          "The correct business appears",
          "The correct location is shown",
          "The review destination loads properly",
          "The QR code scans from the intended distance",
          "The code remains clear after printing",
        ],
        "If you operate several locations, create and test a separate review QR code for each location when each one has its own review destination.",
      ],
    },
    {
      heading: "Tips for Printing a Google Review QR Code",
      variant: "tips",
      blocks: [
        "Use strong contrast between the QR code and the background.",
        "Leave clear space around the code so a phone camera can recognize its edges.",
        "Do not stretch or distort the QR image when adding it to a design.",
        "Choose a size that is appropriate for the scanning distance. A code printed on a receipt can be smaller than one placed on a wall or storefront sign.",
        "For high-volume printing, test one finished sample first.",
      ],
    },
    {
      heading: "Can I Use the Same Review QR Code in Multiple Places?",
      blocks: [
        "Yes, if all of those materials should lead to the same review page.",
        "For example, a local business might use the same Google review link QR code on receipts, business cards, table displays, packaging, and follow-up materials.",
        "However, businesses with multiple locations should make sure each code points to the intended location.",
      ],
    },
    {
      heading: "Does a Google Review QR Code Expire?",
      blocks: [
        "A static QR code does not normally expire simply because time has passed.",
        "What matters is whether the review link encoded in the QR code continues to work.",
        "If the business profile changes, the destination stops working, or you begin using a different review link, test your printed QR codes again.",
        "For permanent signage, occasional testing is a good practice.",
      ],
    },
    {
      heading: "Google Review QR Code vs Regular URL QR Code",
      blocks: [
        "Technically, a Google review link is still a URL.",
        "The difference is the purpose.",
        "A standard URL QR code may point to any web page. A Google review QR code is specifically created to send customers to the place where they can review a business.",
        "Using a dedicated tool makes the purpose clear and helps you create a code specifically for review collection.",
      ],
    },
  ],

  vcard: [
    {
      heading: "How to Use the vCard QR Code Generator",
      blocks: [
        "Creating a contact QR code takes only a few steps:",
        {
          steps: [
            "Enter your name and contact details.",
            "Add your company, job title, website, or address if needed.",
            "Review the information for typing errors.",
            "Generate the vCard QR code.",
            "Scan it with a phone to check how the contact appears.",
            "Download the finished code for print or digital use.",
          ],
        },
        "Only include information you are comfortable sharing with anyone who may see the QR code.",
      ],
    },
    {
      heading: "What Is a vCard QR Code?",
      blocks: [
        "A vCard QR code is designed to share contact information in a format that phones and contact applications can understand.",
        "When someone scans the code, their device may display the contact details with an option to save them to the address book.",
        "This removes much of the manual work involved in exchanging phone numbers, email addresses, company details, and other contact information.",
        "A vCard QR code can act as a digital extension of a traditional business card.",
      ],
    },
    {
      heading: "What Information Should You Add?",
      blocks: [
        "You do not need to fill every available field.",
        "For most professional contacts, the most useful details are:",
        {
          cards: [
            { title: "Name", body: "Helps the recipient identify who the contact belongs to." },
            { title: "Phone number", body: "Allows the person to call or message you later." },
            { title: "Email address", body: "Provides another direct way to get in touch." },
            { title: "Company and job title", body: "Adds context for business and professional networking." },
            {
              title: "Website",
              body: "Useful for a company site, portfolio, professional profile, or personal website.",
            },
            { title: "Address", body: "Can be added when a physical business location is relevant." },
          ],
        },
        "Keep the information focused. Adding unnecessary data can make the QR code more complex without giving the person scanning it much additional value.",
      ],
    },
    {
      heading: "Where Can You Use a vCard QR Code?",
      blocks: [
        "A contact QR code can be useful anywhere people exchange professional or personal contact details.",
        {
          cards: [
            {
              title: "Business Cards",
              body: "Add the QR code to a printed card so people can save your details instead of typing them.",
            },
            {
              title: "Conferences and Networking Events",
              body: "Place it on a badge, booth display, handout, or presentation slide to make exchanging contact information faster.",
            },
            {
              title: "Sales Materials",
              body: "Sales representatives can include a vCard QR code on brochures, product sheets, or proposals.",
            },
            {
              title: "Email Signatures",
              body: "A QR code can provide another way for recipients to save your contact details from a desktop screen.",
            },
            {
              title: "Offices and Reception Areas",
              body: "Businesses can display contact QR codes for specific departments, representatives, or customer-facing staff.",
            },
            {
              title: "Portfolios and Printed Resumes",
              body: "Freelancers and professionals can use a contact QR code to connect printed materials with their direct contact information.",
            },
          ],
        },
      ],
    },
    {
      heading: "Why Use a vCard Instead of a Regular Contact List?",
      blocks: [
        "A printed list of contact details still requires the other person to enter each field manually.",
        "A vCard QR code packages the information in a structured format that a compatible device can recognize.",
        "This can reduce typing mistakes and make the exchange faster, especially at busy networking events or meetings.",
        "It is also useful when your contact information includes several fields, such as a phone number, company name, email, website, and address.",
      ],
    },
    {
      heading: "Free vCard QR Codes for Business Cards",
      blocks: [
        "A free vCard QR Code Generator can be useful when creating traditional business cards.",
        "You can keep the familiar printed layout while adding a digital way to save your contact details.",
        "Place the QR code where it has enough clear space around it and does not interfere with important text or branding.",
        "A short label such as “Scan to save my contact” can make its purpose immediately clear.",
        "Always scan a printed sample before ordering a large batch of cards.",
      ],
    },
    {
      heading: "Static vs Dynamic vCard QR Codes",
      blocks: [
        "There are two common approaches to contact QR codes.",
        {
          cards: [
            {
              title: "Static vCard QR Code",
              body: [
                "A static code stores the contact information in the QR code itself.",
                "Once it has been created and printed, the stored details cannot simply be changed. If your phone number, email, or job title changes, you generally need to create and distribute a new code.",
                "A major benefit is that the contact information can be read directly from the code without relying on a hosted profile page.",
              ],
            },
            {
              title: "Dynamic vCard QR Code",
              body: [
                "A dynamic vCard QR code generator typically creates a QR code that points to an online contact file or profile instead of permanently placing all contact information inside the printed pattern.",
                "Because the destination is managed online, details may be updated without replacing the printed QR code.",
                "Dynamic features depend on the service providing the hosted destination. If this generator creates only static vCard QR codes, changing your information will require creating a new code.",
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "Which vCard QR Code Should You Use?",
      blocks: [
        "A static vCard is a good fit when your contact information is unlikely to change and you want a simple way to share it.",
        "A dynamic option may be more suitable when you regularly update your job title, company, phone number, or other details.",
        "For a basic business card or networking badge, a static contact QR code is often enough.",
        "The right option depends on how frequently your information changes and whether you need the ability to update the destination later.",
      ],
    },
    {
      heading: "Protect Your Personal Information",
      blocks: [
        "A vCard QR code is designed to make contact information easy to access.",
        "That also means you should think carefully about what you include.",
        "If the QR code will be displayed publicly, avoid adding private details that you would not normally place on a public business card.",
        "For professional use, a business phone number and work email may be more appropriate than personal contact information.",
      ],
    },
    {
      heading: "Tips for a Better vCard QR Code",
      blocks: [
        "Review every field before generating the code.",
        "A misspelled email address or incorrect phone number can make the saved contact useless.",
        "For reliable scanning:",
        [
          "Use good contrast between the QR code and its background.",
          "Keep clear space around the code.",
          "Avoid stretching or distorting the image.",
          "Do not print the code too small.",
          "Test it on more than one phone when possible.",
          "Check that the contact fields appear in the correct places.",
        ],
        "If the QR code contains a large amount of information, it may become more visually dense. Keeping the contact card concise can help maintain a simpler pattern.",
      ],
    },
    {
      heading: "Does a vCard QR Code Need Internet Access?",
      blocks: [
        "A static vCard QR code can store the contact information directly in the QR pattern, so the contact data itself does not need to be loaded from a website.",
        "A dynamic contact QR code may require an internet connection because the scanner needs to open an online destination or retrieve the hosted contact information.",
        "The exact behavior depends on how the QR code was created.",
      ],
    },
    {
      heading: "Does a vCard QR Code Expire?",
      blocks: [
        "A static vCard QR code does not normally expire simply because time has passed.",
        "However, the information inside it can become outdated.",
        "If you change your phone number, email address, employer, or other important details, create a new static QR code and replace old copies.",
        "A dynamic solution may allow those details to be updated without changing the printed code, depending on the service being used.",
      ],
    },
  ],

  email: [
    {
      heading: "What Is an Email QR Code?",
      blocks: [
        "An email QR code contains information that tells a compatible device to open an email draft.",
        "The code can include:",
        ["Recipient email address", "Subject line", "Message body"],
        "When someone scans it, their device can open an available email app with those details already filled in.",
        "The QR code does not send the email automatically. The person scanning it can review, edit, or cancel the message before choosing to send it.",
      ],
    },
    {
      heading: "How Does an Email QR Code Work?",
      blocks: [
        "An email QR code commonly uses a mailto: link.",
        "A simple email link may contain only the recipient address. It can also include optional information such as a subject or prepared message.",
        "For the user, the process is straightforward:",
        { note: "Scan → open email app → review message → send" },
        "This removes the need to manually type an address and can reduce simple errors when contacting a business or individual.",
      ],
    },
    {
      heading: "What Should You Add to Your Email QR Code?",
      blocks: [
        "The amount of information you include depends on how the code will be used.",
        { h3: "Email Address" },
        "This is the destination for the message.",
        "Check every character carefully. An incorrect address can direct messages to the wrong inbox or make delivery impossible.",
        { h3: "Subject Line" },
        "A clear subject can help you understand why the person is contacting you.",
        "For example:",
        { chips: ["Product Support Request", "Appointment Question", "Event Feedback", "Quote Request", "General Inquiry"] },
        "Keep the subject short and relevant.",
        { h3: "Pre-Filled Message" },
        "You can use a short message to give the sender a starting point.",
        "For a support QR code, you might ask the customer to include an order number.",
        "For event feedback, you could begin with a simple prompt inviting them to share their experience.",
        "Avoid making the message so long that users need to delete most of it before writing their own email.",
      ],
    },
    {
      heading: "Where Can You Use an Email QR Code?",
      blocks: [
        "A QR code generator for email is useful when people see your contact information somewhere they cannot simply click it.",
        {
          cards: [
            {
              title: "Business Cards",
              body: "Add the code near your email address so contacts can start an email without typing it manually.",
            },
            {
              title: "Customer Support Materials",
              body: [
                "Place it on instruction sheets, warranty cards, product inserts, or support stickers.",
                "A prepared subject line can help identify the type of request.",
              ],
            },
            {
              title: "Feedback Cards",
              body: "Restaurants, stores, events, and service businesses can use an email QR code to make written feedback easier.",
            },
            {
              title: "Product Packaging",
              body: "Customers can scan the code when they have a question about setup, warranty information, or support.",
            },
            {
              title: "Trade Shows and Events",
              body: "A booth visitor can scan the code and contact your team without writing down an email address.",
            },
            {
              title: "Resumes and Portfolios",
              body: "Professionals can add a QR code that opens a new email addressed to them.",
            },
            {
              title: "Posters and Printed Signs",
              body: "Use the code when you want viewers to contact a department, organizer, or business from a physical display.",
            },
          ],
        },
      ],
    },
    {
      heading: "Why Use a QR Code for Email?",
      blocks: [
        "An email address printed on a page still needs to be typed.",
        "A QR code can remove that extra step.",
        "This is especially useful when:",
        [
          "The email address is long",
          "Users are viewing printed material",
          "You want a standard subject line",
          "You want to provide a short message template",
          "Several people need to contact the same inbox",
        ],
        "It can also help direct different requests to the right place.",
        "For example, a company could create separate QR codes for sales, support, partnerships, and feedback.",
      ],
    },
    {
      heading: "Email QR Code for Customer Support",
      blocks: [
        "Support teams can use email QR codes to make it easier for customers to start a properly labeled request.",
        "A code placed on a product might open an email with:",
        { note: ["To: support@example.com", "Subject: Product Support Request"] },
        "The message could include a short prompt such as:",
        { note: "“Please describe the issue and include your order number.”" },
        "The customer can change or add to the message before sending it.",
        "This approach gives the user guidance without forcing them through a long form.",
      ],
    },
    {
      heading: "Email QR Code for Feedback",
      blocks: [
        "A QR code can also provide a direct route to a feedback inbox.",
        "For example, a café could place one on a receipt with the message:",
        { note: "Scan to email your feedback" },
        "An event organizer could use:",
        { note: "Tell us about your experience" },
        "The wording next to the code should clearly explain that scanning will open an email draft.",
      ],
    },
    {
      heading: "Email QR Code vs vCard QR Code",
      blocks: [
        "Both can contain an email address, but they serve different purposes.",
        "An Email QR Code is designed to help someone start an email.",
        "A vCard QR Code is designed to share contact information that may include a name, phone number, company, website, and email address.",
        "Use an email QR code when the main goal is communication by email.",
        "Use a vCard when the main goal is saving a complete contact.",
      ],
    },
    {
      heading: "Email QR Code vs Regular Text QR Code",
      blocks: [
        "A plain text QR code displays text when scanned.",
        "An email QR code is structured to open an email action on compatible devices.",
        "If you simply encode an email address as plain text, the user may still need to copy it manually.",
        "Using an email-specific QR format provides a more direct experience.",
      ],
    },
    {
      heading: "Can I Pre-Fill the Subject and Message?",
      blocks: [
        "Yes, if the generator provides subject and message fields.",
        "Pre-filling these fields can be useful when you want incoming emails to have a consistent purpose.",
        "For example:",
        {
          note: ["Subject: Request a Quote", "Message: “Hello, I would like more information about your services.”"],
        },
        "The person scanning the QR code should still be able to review and edit the email before sending it.",
      ],
    },
    {
      heading: "Keep Pre-Filled Emails Short",
      blocks: [
        "More text is not always better.",
        "A long message can make the QR code more complex and may also feel restrictive to the user.",
        "Keep pre-filled content focused on what helps start the conversation.",
        "Good pre-filled text gives context while leaving room for the sender to explain what they need.",
      ],
    },
    {
      heading: "Tips for Creating a Reliable Email QR Code",
      blocks: [
        "Before downloading or printing the code:",
        [
          "Check the email address for spelling errors.",
          "Test the subject line.",
          "Review the pre-filled message.",
          "Scan the QR code with a real phone.",
          "Confirm that the intended email app or email action opens.",
          "Use strong contrast between the QR code and background.",
          "Leave clear space around the code.",
          "Avoid printing it too small.",
        ],
        "Testing is particularly important before adding the code to packaging, signs, or a large print order.",
      ],
    },
    {
      heading: "Protect Your Email Address From Unwanted Exposure",
      blocks: [
        "A QR code meant for public use can be scanned by anyone who sees it.",
        "If you do not want to publish a personal email address, consider using a dedicated business, support, or contact inbox.",
        "For example:",
        { note: "support@yourbusiness.com" },
        "This may be more suitable for public materials than a private personal address.",
        "Choose the inbox based on where and how the QR code will be displayed.",
      ],
    },
    {
      heading: "Does an Email QR Code Expire?",
      blocks: [
        "A standard static email QR code does not normally expire because time has passed.",
        "However, the email address stored in it still needs to remain valid.",
        "If you stop using that address or change the destination, an old static QR code will still contain the previous information.",
        "Create a new code when the contact details change.",
      ],
    },
  ],

  sms: [
    {
      heading: "What Is an SMS QR Code?",
      blocks: [
        "An SMS QR code contains information that tells a compatible phone to prepare a text message.",
        "The code can include:",
        ["A recipient phone number", "An optional message body"],
        "After scanning, the phone's messaging app can open with those details already filled in.",
        "Nothing is sent automatically. The user can read the message, change it if needed, and tap Send when ready.",
      ],
    },
    {
      heading: "How Does an SMS QR Code Work?",
      blocks: [
        "A QR code can store a structured SMS instruction containing the destination number and optional text.",
        "When the phone recognizes that information, it passes it to the messaging app.",
        "For the user, the flow is simple:",
        { note: "Scan → open SMS draft → review → send" },
        "This removes the need to type a phone number or remember a keyword manually.",
      ],
    },
    {
      heading: "Add a Pre-Filled Text Message",
      blocks: [
        "A prepared message can make the QR code more useful when you want people to send a specific response.",
        "For example:",
        {
          cards: [
            { title: "Appointment request", body: "“I would like to book an appointment.”" },
            { title: "Product inquiry", body: "“I have a question about this product.”" },
            { title: "Event response", body: "“I would like more information about the event.”" },
            { title: "Customer support", body: "“I need help with my order.”" },
            { title: "Opt-in keyword", body: "“JOIN”" },
          ],
        },
        "Keep the message short and clear so users can quickly understand what they are about to send.",
      ],
    },
    {
      heading: "Where Can You Use an SMS QR Code?",
      blocks: [
        "A QR code generator for SMS can be useful anywhere people need a quick way to text a business, organization, or contact number.",
        {
          cards: [
            {
              title: "Posters and Flyers",
              body: "Let people scan a code instead of manually entering a phone number from an advertisement.",
            },
            {
              title: "Customer Support",
              body: "Add a QR code to packaging, instructions, receipts, or service materials so customers can start a support message quickly.",
            },
            {
              title: "Events",
              body: "Use a prepared message for registrations, questions, confirmations, or attendee responses.",
            },
            { title: "Business Cards", body: "Give contacts another way to reach you without asking them to type your number." },
            {
              title: "Storefront Signs",
              body: "Customers can scan a code to ask about opening hours, availability, appointments, or services.",
            },
            {
              title: "Product Packaging",
              body: "A QR code can open a text message for support, product questions, warranty inquiries, or ordering information.",
            },
          ],
        },
      ],
    },
    {
      heading: "Why Use an SMS QR Code?",
      blocks: [
        "A printed phone number still requires someone to type it.",
        "An SMS QR code can remove that step while also preparing the message for them.",
        "This is useful when:",
        [
          "The phone number is difficult to remember",
          "You want users to send a specific keyword",
          "The QR code appears on printed material",
          "You want to reduce typing mistakes",
          "Customers need a quick support option",
          "The same response is requested from many users",
        ],
        "The scanner still stays in control because the text is not sent until they choose to send it.",
      ],
    },
    {
      heading: "Use the Correct Phone Number Format",
      blocks: [
        "Enter the destination number carefully.",
        "For audiences in more than one country, using the full international format can make the number clearer and more portable.",
        "For example, a U.S. phone number normally begins with the +1 country code.",
        "Before publishing the code, scan it yourself and confirm that the intended number appears in the SMS draft.",
      ],
    },
    {
      heading: "Keep the Pre-Filled SMS Short",
      blocks: [
        "Short messages are easier for users to understand and edit.",
        "A concise message also keeps the QR payload simpler.",
        "Instead of writing a long paragraph, use a short prompt such as:",
        { chips: ["JOIN", "BOOK", "INFO", "SEND DETAILS", "I need support", "Please contact me"] },
        "If the user needs to provide detailed information, give them enough space to add it themselves after scanning.",
      ],
    },
    {
      heading: "SMS QR Codes for Customer Support",
      blocks: [
        "Businesses can use SMS QR codes to reduce friction when customers need help.",
        "For example, a product label could include:",
        { note: "Scan to text support" },
        "The QR code might prepare a message such as:",
        { note: "“I need help with product model ______.”" },
        "The customer can add the missing information before sending.",
        "This can work well when SMS is already part of your support process.",
      ],
    },
    {
      heading: "SMS QR Codes for Opt-In Campaigns",
      blocks: [
        "A pre-filled keyword can help reduce mistakes in campaigns that rely on specific text responses.",
        "For example:",
        { chips: ["JOIN", "YES", "INFO"] },
        "Instead of asking users to remember the keyword and phone number, the QR code can prepare both.",
        "If you use SMS for marketing or promotional messages, make sure your opt-in process follows the laws and consent requirements that apply to your business and audience.",
      ],
    },
    {
      heading: "SMS QR Code vs Phone Number QR Code",
      blocks: [
        "These tools perform different actions.",
        "An SMS QR Code is intended to open a text message.",
        "A Phone Number QR Code is intended to open the device's phone dialer for a call.",
        "Use the SMS option when you want users to send a written message.",
        "Use the phone-number option when you want them to call.",
      ],
    },
    {
      heading: "SMS QR Code vs WhatsApp QR Code",
      blocks: [
        "Both can start a written conversation, but they use different services.",
        "An SMS QR code opens the phone's regular messaging function.",
        "A WhatsApp QR code directs the user toward a WhatsApp conversation.",
        "SMS may be useful when you do not want to require a specific messaging app.",
        "WhatsApp may be more suitable when your business already uses that platform for customer communication.",
      ],
    },
    {
      heading: "Does an SMS QR Code Send the Message Automatically?",
      blocks: [
        "No.",
        "Scanning the QR code can prepare the recipient and message, but the user still needs to review and send the text.",
        "This is important because the scanner remains in control of what is sent from their phone.",
      ],
    },
    {
      heading: "Test Your SMS QR Code Before Printing",
      blocks: [
        "Phone platforms and QR readers can handle SMS instructions slightly differently, so testing is important.",
        "Before using the code publicly:",
        [
          "Confirm the phone number",
          "Check the country code",
          "Review the pre-filled message",
          "Test the code on a real phone",
          "Test more than one device when possible",
          "Confirm that the SMS app opens correctly",
          "Check the printed size and contrast",
        ],
        "If you plan a large print run, test a physical sample first.",
      ],
    },
    {
      heading: "Can I Print an SMS QR Code?",
      blocks: [
        "Yes.",
        "SMS QR codes can be added to:",
        [
          "Posters",
          "Flyers",
          "Business cards",
          "Product packaging",
          "Receipts",
          "Table cards",
          "Signs",
          "Event materials",
          "Instruction sheets",
        ],
        "Add a short call to action beside the code so users know what scanning it will do.",
        "Examples:",
        { chips: ["Scan to text us", "Scan to request information", "Scan to contact support"] },
        "A QR code without context may be ignored because users do not know where it leads.",
      ],
    },
    {
      heading: "Does an SMS QR Code Expire?",
      blocks: [
        "A static SMS QR code does not normally expire simply because time has passed.",
        "However, the information stored inside it can become outdated.",
        "If the phone number changes, an old code will continue to contain the previous number.",
        "Create a new QR code whenever the destination number or intended message changes.",
      ],
    },
    {
      heading: "Protect Your Phone Number",
      blocks: [
        "If you place an SMS QR code in a public location, anyone who can scan it may be able to access the destination number.",
        "For business use, consider using a dedicated customer-service or business number rather than a private personal number.",
        "Only publish contact information that you are comfortable making available to the intended audience.",
      ],
    },
  ],

  phone: [
    {
      heading: "What Is a Phone Number QR Code?",
      blocks: [
        "A phone number QR code is designed to start the calling process after a scan.",
        "When a compatible smartphone reads the code, it can open the phone dialer with the encoded number already entered. The user can then decide whether to place the call.",
        "This avoids manually typing a number and reduces the chance of dialing the wrong digits.",
      ],
    },
    {
      heading: "How Does a Call QR Code Work?",
      blocks: [
        "Phone QR codes commonly use a tel: link.",
        "This tells a compatible mobile device that the information inside the code is a telephone number rather than an ordinary website address.",
        "The basic experience is:",
        { note: "Scan → phone dialer opens → check number → tap to call" },
        "The QR code should not place a call without the user's confirmation.",
      ],
    },
    {
      heading: "Use the Correct Phone Number Format",
      blocks: [
        "Check the number carefully before generating your QR code.",
        "If people may scan it from different countries, use the full international number with the appropriate country code.",
        "For example, a U.S. number normally begins with:",
        { note: "+1" },
        "Using an international format can make the destination clearer when your audience includes travelers or customers outside your local area.",
        "Always scan the completed QR code and verify every digit before publishing it.",
      ],
    },
    {
      heading: "Where Can You Use a Phone Number QR Code?",
      blocks: [
        "A phone number QR code generator is useful when calling is the action you want someone to take immediately.",
        {
          cards: [
            {
              title: "Business Cards",
              body: "Add a scan-to-call option next to your printed phone number. People can contact you without typing the number into their device.",
            },
            {
              title: "Storefront Signs",
              body: "A customer who finds your business closed can scan the code to call about hours, appointments, availability, or other questions.",
            },
            {
              title: "Service Vehicles",
              body: "Plumbers, electricians, contractors, cleaning companies, delivery services, and other mobile businesses can add a phone QR code to vehicle graphics.",
            },
            {
              title: "Real Estate Signs",
              body: "A property sign can include a QR code that opens the agent's phone number for inquiries.",
            },
            {
              title: "Product Packaging",
              body: "Give customers a quick way to call support, sales, or another relevant department.",
            },
            { title: "Flyers and Posters", body: "Turn a printed advertisement into a direct path to a phone conversation." },
            {
              title: "Reception and Service Desks",
              body: "Visitors can scan a code to contact a department, representative, or support line.",
            },
          ],
        },
      ],
    },
    {
      heading: "Why Use a Scan-to-Call QR Code?",
      blocks: [
        "A phone number may be easy to display, but it is not always easy to enter.",
        "Long numbers, unfamiliar area codes, and international prefixes can lead to typing mistakes.",
        "A scan to call QR code removes that manual step.",
        "It can be especially useful when someone sees your number for only a few seconds or needs to contact you immediately.",
        "Instead of remembering the number, copying it, and opening the dialer, they can scan the code and review the prepared call.",
      ],
    },
    {
      heading: "Add a Clear Call to Action",
      blocks: [
        "Do not assume everyone will know what the QR code does.",
        "Add a short instruction near it, such as:",
        { chips: ["Scan to call", "Scan to contact us", "Call customer support", "Scan for phone assistance", "Need help? Scan to call"] },
        "Clear wording helps people understand what will happen before they scan.",
        "This is particularly useful on storefronts, product labels, advertisements, and public signs.",
      ],
    },
    {
      heading: "Phone QR Code vs SMS QR Code",
      blocks: [
        "A phone QR code and an SMS QR code can contain the same telephone number, but their actions are different.",
        "A phone call QR code opens the phone dialer so the user can make a call.",
        "An SMS QR code opens the messaging app and can also include a prepared text message.",
        "Choose the phone option when a live conversation is the intended next step.",
        "Choose SMS when you want the user to send a text.",
      ],
    },
    {
      heading: "Phone QR Code vs vCard QR Code",
      blocks: [
        "A phone number QR code is focused on one action: calling.",
        "A vCard QR code is intended for saving contact information. It may contain a name, phone number, email address, company, job title, website, and other details.",
        "If your goal is “call us now,” a phone QR code provides a more direct experience.",
        "If your goal is “save my contact,” a vCard is usually more appropriate.",
      ],
    },
    {
      heading: "Phone QR Code vs WhatsApp QR Code",
      blocks: [
        "These codes also serve different purposes.",
        "A phone QR code uses the device's regular calling function.",
        "A WhatsApp QR code is designed to open a WhatsApp conversation.",
        "Use a call QR code when you want people to reach you by telephone without depending on a particular messaging app.",
      ],
    },
    {
      heading: "Useful Ways Businesses Can Use Call QR Codes",
      blocks: [
        "A free phone number QR code generator can support several business contact flows.",
        "For example, you could create separate QR codes for:",
        [
          "Sales inquiries",
          "Customer support",
          "Reservations",
          "Appointment booking",
          "Property inquiries",
          "Emergency contact",
          "Service requests",
          "General business calls",
        ],
        "If different departments use different phone numbers, label each QR code clearly so customers know who they are contacting.",
      ],
    },
    {
      heading: "Can a Phone QR Code Call a Mobile or Landline Number?",
      blocks: [
        "A phone QR code can contain different types of telephone numbers, including mobile, business, support, and landline numbers.",
        "Whether the call can be completed depends on the scanning device, its calling capabilities, the telephone network, and the number itself.",
        "For example, a device without phone-call capability may recognize the number but may not be able to place a normal cellular call.",
      ],
    },
    {
      heading: "Does Scanning the QR Code Call Immediately?",
      blocks: [
        "Normally, no.",
        "A compatible phone generally recognizes the telephone information and opens or presents the call action. The user still confirms whether to make the call.",
        "This gives the person scanning the QR code control over the action.",
      ],
    },
    {
      heading: "Protect Your Personal Phone Number",
      blocks: [
        "Think about where the QR code will appear.",
        "If you put it on a public poster, website, storefront, vehicle, or product, anyone who sees the code may be able to access the encoded number.",
        "For public business materials, a dedicated business or customer-service number may be more suitable than a private personal number.",
        "Only publish a number you are comfortable making available to that audience.",
      ],
    },
    {
      heading: "Tips for Printing a Phone Number QR Code",
      blocks: [
        "Keep the finished code easy to recognize and scan.",
        "For better results:",
        [
          "Use strong contrast between the QR code and background.",
          "Leave clear space around the code.",
          "Do not stretch or distort the image.",
          "Make it large enough for the expected scanning distance.",
          "Add a short “Scan to Call” label.",
          "Test a printed sample before producing many copies.",
          "Check that the correct number opens.",
        ],
        "A QR code on a business card can be relatively small, while a code on a window, vehicle, or large sign needs to remain readable from farther away.",
      ],
    },
    {
      heading: "Does a Phone Number QR Code Expire?",
      blocks: [
        "A standard static phone QR code that contains the telephone number itself does not have a built-in expiration date.",
        "However, the phone number can become outdated.",
        "If your business changes numbers, the old QR code will still contain the previous number. You will need to generate a new code and replace old printed copies.",
        "For permanent signs or long-running campaigns, test the number from time to time.",
      ],
    },
  ],

  image: [
    {
      heading: "What Is an Image QR Code?",
      blocks: [
        "An image QR code is a scannable code that helps users open a photo or graphic on their device.",
        "For normal image files, the QR code usually contains a link to the image rather than storing the entire photo inside the black-and-white QR pattern.",
        "When someone scans the code, their phone can open the linked image in a browser or viewing page.",
        "This makes image QR codes useful when you want to connect physical materials with visual content.",
      ],
    },
    {
      heading: "How Does Image to QR Code Work?",
      blocks: [
        "A typical image QR workflow has three parts.",
        "First, the image needs an online destination that a phone can access.",
        "Next, that destination is encoded into the QR code.",
        "When the code is scanned, the phone opens the linked image.",
        "The experience looks like this:",
        { note: "Image → shareable destination → QR code → scan → view image" },
        "This keeps the QR code small enough to scan while allowing the viewer to access a much larger photo or graphic.",
      ],
    },
    {
      heading: "How to Make a QR Code for an Image",
      blocks: [
        "If you want to make a QR code from a picture, start with an image that is clear and suitable for viewing on a phone.",
        "Upload or add the image using the generator above, then create the QR code.",
        "Once generated, scan it yourself.",
        "Check that:",
        [
          "The correct image opens",
          "The image loads properly on mobile",
          "Text inside the image is readable",
          "The QR code scans at its intended size",
          "The destination is accessible to the people you want to share it with",
        ],
        "Once everything works correctly, download the QR code and add it to your material.",
      ],
    },
    {
      heading: "What Images Can You Share With a QR Code?",
      blocks: [
        "An image QR code generator can be useful for many types of visual content.",
        "Examples include:",
        [
          "Product photos",
          "Artwork",
          "Infographics",
          "Instruction diagrams",
          "Event posters",
          "Restaurant menu images",
          "Floor plans",
          "Maps",
          "Certificates",
          "Educational graphics",
          "Before-and-after photos",
          "Promotional designs",
          "Portfolios",
          "Reference images",
        ],
        "Choose an image that makes sense on a mobile screen because smartphones are likely to be the main scanning device.",
      ],
    },
    {
      heading: "Image QR Codes for Product Packaging",
      blocks: [
        "Packaging has limited space.",
        "A QR code can give customers access to a larger product image, diagram, installation graphic, care guide, or other visual without filling the package with extra content.",
        "For example, a small product label could include:",
        { note: "Scan to View Instructions" },
        "The QR code could then open an image showing the setup process.",
        "This can be useful when visual instructions communicate information more clearly than a long block of printed text.",
      ],
    },
    {
      heading: "Share Artwork and Photography",
      blocks: [
        "Artists and photographers can use image QR codes beside physical work.",
        "A code could open:",
        [
          "A high-resolution version",
          "An alternate view",
          "A related photograph",
          "Behind-the-scenes imagery",
          "A digital artwork preview",
          "Additional portfolio work",
        ],
        "At an exhibition, the QR code can provide extra visual context without adding more printed material beside the artwork.",
      ],
    },
    {
      heading: "Image QR Codes for Events",
      blocks: [
        "Events often use printed signs, invitations, handouts, and displays.",
        "An image QR code can connect those materials with visual information such as:",
        [
          "Venue maps",
          "Event posters",
          "Seating plans",
          "Schedules saved as graphics",
          "Event photography",
          "Instruction images",
          "Promotional artwork",
        ],
        "Use a clear call to action so attendees know why they should scan.",
        "For example:",
        { chips: ["Scan to View the Map", "Scan to See the Image"] },
      ],
    },
    {
      heading: "Use Image QR Codes in Education",
      blocks: [
        "Teachers and students can use QR codes to connect worksheets, posters, displays, or classroom materials with visual resources.",
        "A scan might open a diagram, historical image, artwork, chart, educational graphic, or project image.",
        "This can keep printed materials clean while still giving students access to supporting visuals.",
      ],
    },
    {
      heading: "JPG, PNG, and Other Image Formats",
      blocks: [
        "Many image QR tools work with common formats such as JPG, JPEG, PNG, WebP, or GIF.",
        "The exact file types and upload limits depend on the generator you are using.",
        "If an image does not upload successfully, check its format and file size.",
        "You can also reduce an unnecessarily large image before uploading it. A smaller optimized file can load faster for people using mobile data.",
        {
          cards: [
            {
              title: "JPG to QR Code",
              body: [
                "JPG is commonly used for photographs and other detailed images.",
                "If your tool accepts JPG files, you can add the image, generate its QR code, and let users open the picture after scanning.",
                "Before sharing it, check that image compression has not made important details difficult to see.",
              ],
            },
            {
              title: "PNG to QR Code",
              body: [
                "PNG works well for screenshots, graphics, diagrams, logos, and images containing text.",
                "A PNG image can also be shared through a QR code when the generator supports that format.",
                "For graphics with small text, scan the final code and view the image on a phone to make sure everything remains readable.",
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "Image QR Code vs Adding a Logo to a QR Code",
      blocks: [
        "These are two different things.",
        "An image QR code is created so the scanner can open an image.",
        "Adding a logo to the middle of a QR code changes the appearance of the QR design itself.",
        "For example, placing your company logo in a QR code does not automatically make that logo the destination.",
        "If your goal is to let someone scan and view a photo, use an image-sharing QR code.",
      ],
    },
    {
      heading: "Image QR Code vs URL QR Code",
      blocks: [
        "Both can use a web link behind the scenes, but the intended use is different.",
        "A regular URL QR code may send someone to a homepage, product page, form, article, or almost any other webpage.",
        "An image QR code is specifically intended to give the scanner access to a photo or graphic.",
        "Use the image option when the visual itself is the content you want people to see.",
      ],
    },
    {
      heading: "Does the Image Sit Inside the QR Code?",
      blocks: [
        "For ordinary photos and graphics, usually not.",
        "Image files contain far more data than a practical QR code can hold.",
        "Instead, the image is generally made available through an online URL, and that link is stored in the QR code.",
        "The person scanning the code then uses that link to access the image.",
        "This distinction is important because the QR code may stop showing the picture if the linked image is later removed or becomes unavailable.",
      ],
    },
    {
      heading: "Does an Image QR Code Need Internet Access?",
      blocks: [
        "If the QR code points to an online image or hosted image page, the person scanning it needs an internet connection to load the picture.",
        "The QR code itself can still be scanned, but the linked image cannot be downloaded from the internet while the device is offline.",
      ],
    },
    {
      heading: "Think About Image Privacy Before Sharing",
      blocks: [
        "An image QR code is designed to make a picture easier to access.",
        "Do not use publicly distributed QR codes for private or sensitive images unless you understand who can access the destination.",
        "Anyone who obtains the QR code may potentially be able to open the linked image.",
        "For public materials, use images that you are comfortable sharing with the intended audience.",
        "Also check how uploaded files are stored and retained by the service if privacy is important to your use case.",
      ],
    },
    {
      heading: "Optimize Images for Mobile Viewing",
      blocks: [
        "Large image files may take longer to open, especially on slower mobile connections.",
        "Before creating the QR code:",
        [
          "Use an appropriate image size",
          "Compress oversized photos when possible",
          "Keep important text large enough to read",
          "Check portrait and landscape display",
          "Avoid unnecessarily huge file sizes",
          "Test the image using mobile data as well as WiFi",
        ],
        "The best image is not always the one with the largest file size. It is the one that loads quickly while remaining clear enough for its purpose.",
      ],
    },
    {
      heading: "Tips for Printing an Image QR Code",
      blocks: [
        "A perfectly working image link is not useful if the QR code itself is difficult to scan.",
        "For print:",
        [
          "Use strong contrast",
          "Keep clear space around the QR pattern",
          "Avoid stretching the QR image",
          "Do not crop its edges",
          "Print it large enough for the expected distance",
          "Add a short explanation beside it",
          "Test a physical sample",
        ],
        "A QR code on product packaging can be smaller than one intended for a wall poster or exhibition display.",
      ],
    },
    {
      heading: "Does an Image QR Code Expire?",
      blocks: [
        "The QR pattern itself may continue to work, but the image destination also needs to remain available.",
        "If the linked picture is deleted, moved, or becomes inaccessible, scanning the QR code may no longer display the intended image.",
        "For QR codes that will remain in print for a long time, use a stable image destination and test it occasionally.",
      ],
    },
  ],

  video: [
    {
      heading: "What Is a Video QR Code?",
      blocks: [
        "A video QR code is a scannable code that gives users quick access to a video.",
        "Instead of printing a long video URL or asking someone to search for the content manually, you can provide a QR code. After scanning it, the viewer can open the linked video on their phone.",
        "A video QR code can point to content hosted on platforms such as YouTube, Vimeo, cloud storage, your own website, or another accessible video destination.",
      ],
    },
    {
      heading: "How Does a Video QR Code Work?",
      blocks: [
        "A normal QR code does not act as a video player.",
        "Instead, it usually stores the web address that leads to the video.",
        "The process looks like this:",
        { note: "Video → shareable link → QR code → scan → watch" },
        "If you upload a video directly to a QR service, that service may first host the file or create a viewing page and then connect the QR code to that destination.",
        "This approach allows much larger video files to be shared without trying to place all of the video data inside the QR pattern.",
      ],
    },
    {
      heading: "How to Make a QR Code for a Video",
      blocks: [
        "If you are wondering how to make a QR code for a video, start by making sure the video has a destination that other people can access.",
        "For a YouTube, Vimeo, or other hosted video, copy its shareable link.",
        "If the tool supports direct video uploads, add the file using the upload option provided.",
        "Generate the code and scan it with a real phone.",
        "Make sure the viewer can reach the video without unexpected permission errors or login restrictions.",
      ],
    },
    {
      heading: "What Videos Can You Share With a QR Code?",
      blocks: [
        "A video to QR code generator can be useful for many types of content, including:",
        [
          "Product demonstrations",
          "How-to videos",
          "Training clips",
          "Event highlights",
          "Property tours",
          "Classroom lessons",
          "Artist portfolios",
          "Restaurant introductions",
          "Installation instructions",
          "Welcome videos",
          "Marketing campaigns",
          "Customer support videos",
          "Behind-the-scenes content",
          "Video presentations",
        ],
        "The best use case is one where watching the video gives the scanner useful information that would be difficult to fit on the printed material itself.",
      ],
    },
    {
      heading: "Create a QR Code for a YouTube Video",
      blocks: [
        "YouTube videos are easy to share because they already have a public or shareable URL.",
        "Copy the link to the video and add it to the generator.",
        "After creating the QR code, scan it and confirm that the correct YouTube video opens.",
        "This can be useful for:",
        [
          "Tutorials",
          "Product videos",
          "Interviews",
          "Educational content",
          "Music videos",
          "Company introductions",
          "Event recordings",
        ],
        "If the YouTube video is private or restricted, viewers may still need the required permission to watch it.",
      ],
    },
    {
      heading: "Turn an MP4 Video Into a QR Code",
      blocks: [
        "An MP4 file cannot normally be treated like a short piece of text inside a practical QR code because video files contain much more data.",
        "If your generator supports MP4 uploads, the file may be hosted or connected to an online viewing page first.",
        "Another option is to upload the MP4 to a video platform or file-hosting service, copy the shareable link, and create a QR code from that URL.",
        "Always check who can access the video before distributing the QR code.",
      ],
    },
    {
      heading: "Where Can You Use a Video QR Code?",
      blocks: [
        "Video QR codes work particularly well when printed space is limited but you want to provide richer information.",
        {
          cards: [
            {
              title: "Product Packaging",
              body: "A customer can scan the code to watch an unboxing video, installation guide, product demonstration, or care tutorial.",
            },
            {
              title: "Instruction Manuals",
              body: [
                "Complex steps can sometimes be easier to understand in a video than through text and diagrams alone.",
                "Add a QR code beside the relevant instructions with a label such as:",
                { note: "Scan to Watch the Tutorial" },
              ],
            },
            {
              title: "Posters and Flyers",
              body: "Connect a printed promotion with a trailer, advertisement, event preview, or campaign video.",
            },
            {
              title: "Business Cards",
              body: "Creators, videographers, artists, and other professionals can link to a showreel, introduction, or portfolio video.",
            },
            { title: "Real Estate", body: "A property flyer or sign can include a QR code that opens a video tour." },
            {
              title: "Events",
              body: "Use video QR codes on invitations, displays, tickets, or programs to share a welcome message, event preview, recap, or instructions.",
            },
            {
              title: "Education",
              body: "Teachers can connect worksheets, textbooks, classroom displays, or assignments with lessons and demonstrations.",
            },
          ],
        },
      ],
    },
    {
      heading: "Video QR Codes for Product Instructions",
      blocks: [
        "One useful application is giving customers visual help after they purchase a product.",
        "A printed manual may explain the basic process, while the QR code opens a video showing exactly how to complete the task.",
        "For example:",
        { note: "Scan to Watch Setup Instructions" },
        "This can be useful for assembly, installation, maintenance, recipes, demonstrations, and troubleshooting.",
        "Keep the linked video focused on the task promised beside the QR code.",
      ],
    },
    {
      heading: "Video QR Codes for Marketing",
      blocks: [
        "Printed advertisements can only show a limited amount of information.",
        "A video QR code can connect a poster, brochure, package, or display with a longer story.",
        "A customer might scan to watch:",
        [
          "A product demonstration",
          "A brand introduction",
          "A customer story",
          "A campaign video",
          "An event trailer",
          "A behind-the-scenes clip",
        ],
        "Use a clear call to action instead of placing an unexplained QR code on the design.",
        "Scan to Watch is often enough.",
      ],
    },
    {
      heading: "Video QR Code vs URL QR Code",
      blocks: [
        "A video QR code ultimately may use a URL, but the purpose is more specific.",
        "A regular URL QR code can lead to almost any webpage.",
        "A video QR code is created specifically to give the scanner access to video content.",
        "Use a video-focused page when the video itself is the main destination and viewing experience.",
      ],
    },
    {
      heading: "Is the Video Stored Inside the QR Code?",
      blocks: [
        "Usually, no.",
        "Video files are much larger than the amount of information that can practically be encoded in a normal QR pattern.",
        "Instead, the QR code normally contains a link to a video hosted somewhere online.",
        "When someone scans the QR code, their phone follows that link and loads the video from its host.",
        "If your tool accepts a direct upload, the file may be stored by the service and the QR code may link to the resulting video page.",
      ],
    },
    {
      heading: "Does a Video QR Code Need Internet Access?",
      blocks: [
        "If the QR code leads to an online video, the viewer will normally need an internet connection to load and play it.",
        "The connection may be WiFi or mobile data.",
        "A slow connection or very large video file can also affect playback, so test the destination on a mobile device before sharing the code widely.",
      ],
    },
    {
      heading: "Check Video Sharing Permissions",
      blocks: [
        "A working QR code does not automatically make a private video public.",
        "If you link to content stored in Google Drive, cloud storage, a private video platform, or another restricted service, viewers still need permission to access it.",
        "Before printing your QR code:",
        [
          "Open the video link in a private or incognito browser.",
          "Check whether login is required.",
          "Confirm that the intended audience has access.",
          "Make sure the video has not been deleted or moved.",
        ],
        "This prevents users from scanning a perfectly valid QR code only to reach an access-denied page.",
      ],
    },
    {
      heading: "Protect Private Video Content",
      blocks: [
        "Think about who will be able to scan your code.",
        "A QR code printed publicly can potentially be scanned by anyone who sees it.",
        "Avoid linking sensitive, confidential, personal, or internal videos through a publicly distributed code unless the destination itself has suitable access controls.",
        "If the tool uploads and hosts videos for you, review its file storage and retention policies before using it for private material.",
      ],
    },
    {
      heading: "Static vs Dynamic Video QR Codes",
      blocks: [
        "A static QR code usually points directly to one video URL.",
        "If that URL changes, you generally need to create a new QR code.",
        "A dynamic QR solution can use a managed redirect that may allow the destination video to be changed later without replacing the printed code.",
        "Dynamic functionality depends on the QR service you use.",
        "If this tool creates only static codes, assume that changing the video destination will require a new QR code.",
      ],
    },
    {
      heading: "Does a Video QR Code Expire?",
      blocks: [
        "The QR image itself may continue to scan for a long time, but the video destination must also remain available.",
        "A code can stop being useful if:",
        [
          "The video is deleted",
          "The video link changes",
          "Sharing permissions change",
          "The hosting account is closed",
          "The file is moved",
          "A temporary hosting link expires",
        ],
        "For QR codes printed on permanent materials, use a stable video destination and check it occasionally.",
      ],
    },
    {
      heading: "Tips for a Better Video QR Code",
      blocks: [
        "Before publishing your code:",
        [
          "Test the video on a smartphone.",
          "Check that it loads quickly enough.",
          "Verify the sharing permissions.",
          "Use a mobile-friendly video destination.",
          "Keep good contrast in the QR design.",
          "Leave clear space around the QR pattern.",
          "Avoid stretching or cropping the QR image.",
          "Add a short call to action.",
          "Test a physical print before producing many copies.",
        ],
        "The viewer should understand what will happen before scanning.",
        "Labels such as “Scan to Watch,” “Watch the Demo,” or “Scan for Video Instructions” provide useful context.",
      ],
    },
  ],
};

export function getArticle(toolId) {
  return ARTICLES[toolId] || null;
}
