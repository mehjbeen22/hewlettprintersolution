import React from 'react';

const TermsAndConditions = () => {
  const termsContent = [
    {
      content: [
        'Welcome to hewlettprintersolution! These terms and conditions outline the rules and regulations for the use of hewlettprintersolution’s Website, located at https://hewlettprintersolution.com. By accessing this website, we assume you accept these terms and conditions. Do not continue to use hewlettprintersolution if you do not agree to take all of the terms and conditions stated on this page.',
      ],
    },
    {
      section: 'Cookies',
      content: [
        'The website uses cookies to help personalize your online experience. By accessing hewlettprintersolution, you agreed to use the required cookies.',
        'A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.',
        'We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work.',
        'Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.',
      ],
    },
    {
      section: 'Content Liability',
      content: [
        'We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.',
      ],
    },
    {
      section: 'Reservation of Rights',
      content: [
        'We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.',
      ],
    },
    {
      section: 'Removal of links from our website',
      content: [
        'If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly. We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.',
      ],
    },
    {
      section: 'License',
      content: [
        'Unless otherwise stated, hewlettprintersolution and/or its licensors own the intellectual property rights for all material on hewlettprintersolution. All intellectual property rights are reserved.',
        'You may access this from hewlettprintersolution for your own personal use subjected to restrictions set in these terms and conditions.',
        'You must not:',
        '- Copy or republish material from hewlettprintersolution',
        '- Sell, rent, or sub-license material from hewlettprintersolution',
        '- Reproduce, duplicate or copy material from hewlettprintersolution',
        '- Redistribute content from hewlettprintersolution',
        'This Agreement shall begin on the date hereof.',
      ],
    },
    {
      section: 'Hyperlinking to our Content',
      content: [
        'The following organizations may link to our Website without prior written approval:',
        '- Government agencies',
        '- Search engines',
        '- News organizations',
        '- Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses',
        '- System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.',
        'These organizations may link to our home page, to publications, or to other Website information so long as the link:',
        '- is not in any way deceptive;',
        '- does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services;',
        '- fits within the context of the linking party’s site.',
      ],
    },
    {
      section: 'Disclaimer',
      content: [
        'To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:',
        '- limit or exclude our or your liability for death or personal injury;',
        '- limit or exclude our or your liability for fraud or fraudulent misrepresentation;',
        '- limit any of our or your liabilities in any way that is not permitted under applicable law;',
        '- exclude any of our or your liabilities that may not be excluded under applicable law.',
        'The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:',
        '- are subject to the preceding paragraph;',
        '- govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.',
        'As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.',
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-900 p-6 items-center flex flex-col">
      <h1 className="text-4xl text-[#1e3a8a] font-bold text-center p-2">
        Terms and Conditions
      </h1>

      <div className="border  w-[90%] p-7">
        {termsContent.map((section, index) => (
          <div key={index} className="mb-6">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: '#1e3a8a' }}
            >
              {section.section}
            </h2>
            {section.content.map((paragraph, idx) => (
              <p key={idx} className="text-lg mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
