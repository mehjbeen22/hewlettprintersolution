import React from 'react';

// The array of objects
const contentArray = [
  {
    title: 'Contact Information',
    content: [
      'If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at support@hewlettprintersolution.com.',
    ],
  },
  {
    title: 'Disclaimers for hewlettprintersolution.com',
    content: [
      'All the information on this website – https://hewlettprintersolution.com – is published in good faith and for general information purpose only.',
      'hewlettprintersolution does not make any warranties about the completeness, reliability and accuracy of this information.',
      'Any action you take upon the information you find on this website (hewlettprintersolution), is strictly at your own risk.',
      'hewlettprintersolution will not be liable for any losses and/or damages in connection with the use of our website.',
      'From our website, you can visit other websites by following hyperlinks to such external sites.',
      'While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites.',
      'These links to other websites do not imply a recommendation for all the content found on these sites.',
      "Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.",
      'Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control.',
      'Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.',
    ],
  },
  {
    title: 'Consent',
    content: [
      'By using our website, you hereby consent to our disclaimer and agree to its terms.',
    ],
  },
  {
    title: 'Update',
    content: [
      'Should we update, amend or make any changes to this document, those changes will be prominently posted here.',
    ],
  },
];

// The React functional component
const Disclaimer = () => {
  return (
    <div className="bg-white text-gray-900 p-6 items-center flex flex-col">
      <h1 className="text-4xl text-[#1e3a8a] font-bold text-center p-2">
        Disclaimer
      </h1>

      <div className="border  w-[90%] p-7">
        {contentArray.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl  text-[#1e3a8a] mb-4">{section.title}</h2>
            {section.content.map((paragraph, idx) => (
              <p key={idx} className="mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disclaimer;
