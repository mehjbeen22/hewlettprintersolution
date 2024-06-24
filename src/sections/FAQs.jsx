import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: "I don't have an email account. Can HelloTech help with that?",
    answer:
      'No problem. Your tech can help select an email provider and then get your account set up.',
  },
  {
    question: "I'm having trouble with my email. Can HelloTech help?",
    answer:
      "Yes, HelloTech can help if you're having trouble with your email. We troubleshoot common email-related problems. This might include issues such as trouble with sending or receiving messages, missing or duplicated emails and undeliverable emails.",
  },
  {
    question:
      "I'm having trouble with my Google account, but not specifically my email.",
    answer:
      "We can help with that. Go ahead and book your service, detailing the issue you're experiencing.",
  },
  {
    question:
      "I'm having trouble with another online account. Can my tech help with that?",
    answer:
      "Yes. When you book your service, you can detail the issue you're experiencing. Our techs can assist you with troubleshooting problems you're having with an online account, even if it's not an email account specifically.",
  },
  {
    question:
      'What is included in an Email or Online Account Setup with HelloTech?',
    answer: `This Email or Online Account Setup service with Hello Tech includes:
• Troubleshooting or setting up one active email account
• Configuring account settings and features
• Demonstrating webmail functionality
• Instant online support through HelloTech NOW should you choose to use it instead of in-home service`,
  },
  {
    question:
      "How much does HelloTech's Email or Online Account Setup service cost?",
    answer: `HelloTech's Email or Online Account Setup service has a base price of $29 and starts at $0 for members of Smart Home Plus.
While setting up a new account does not result in any additional charges, if your service requires troubleshooting an existing account, an extra charge of $50 will apply.
If you opt for in-home service instead of HelloTech NOW, an additional $50 charge applies.`,
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white text-[#1e3a8a] p-6">
      <section className="max-w-6xl mx-auto">
        <h4 className="text-3xl font-bold mb-6">Frequently Asked Questions</h4>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
                onClick={() => handleToggle(index)}
              >
                <h5 className="text-lg font-medium">{faq.question}</h5>
                <ChevronRightIcon
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-90' : ''
                  }`}
                />
              </div>
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FAQAccordion;
