import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What are refurbished printers?',
      answer:
        'Refurbished printers are pre-owned printers that have been inspected, repaired, and restored to working condition by professionals. These printers undergo rigorous testing to ensure they meet quality standards before being sold again.',
    },
    {
      question: 'Are refurbished printers reliable?',
      answer:
        'Yes, refurbished printers can be reliable. They are thoroughly tested and repaired to ensure they function properly. Additionally, refurbished printers often come with warranties to provide peace of mind to the buyers.',
    },
    {
      question: 'What is the difference between refurbished and used printers?',
      answer:
        'Refurbished printers have been inspected, repaired, and restored to working condition, whereas used printers are sold as-is without any repairs or inspections. Refurbished printers often come with warranties, while used printers may not.',
    },
    {
      question: 'Do refurbished printers come with warranties?',
      answer:
        "Yes, many refurbished printers come with warranties. These warranties may vary depending on the seller and the specific printer model. It's important to check the warranty details before making a purchase.",
    },
    {
      question: "Can I return a refurbished printer if I'm not satisfied?",
      answer:
        "Yes, most sellers offer a return policy for refurbished printers. However, the terms and conditions may vary, so it's essential to review the return policy before making a purchase. Some sellers may charge a restocking fee for returns.",
    },
    {
      question: 'Are refurbished printers environmentally friendly?',
      answer:
        'Yes, purchasing a refurbished printer is an environmentally friendly choice. It helps reduce electronic waste by giving a second life to pre-owned printers. Additionally, refurbishing requires fewer resources compared to manufacturing new printers.',
    },
  ];

  return (
    <div className="bg-white text-gray-900 p-6 items-center flex flex-col">
      <h1 className="text-4xl text-[#1e3a8a] font-bold text-center p-2">
        Frequently Asked Questions
      </h1>

      <div className="border  w-[90%] p-7">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl  mb-2 text-[#1e3a8a]">{faq.question}</h2>
            <p className="text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
