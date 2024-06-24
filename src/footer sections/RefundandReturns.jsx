import React from 'react';

const ReturnRefundsPolicy = () => {
  const policyContent = [
    {
      section: 'Return and Refunds Policy',
      content: [
        'You are entitled to cancel your order within 30 days without giving any reason for doing so. The deadline for canceling an order is 30 days from the date you received the goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered. In order to exercise your right of cancellation, you must inform us of your decision by means of a clear statement. You can inform us of your decision by e-mail 123-printerlivesolution.com. We will reimburse you no later than 30 days from the day on which we receive the returned goods. We will use the same means of payment as you used for the order, and you will not incur any fees for such reimbursement.',
      ],
    },
    {
      section: 'Returning Goods',
      content: [
        'You are responsible for the cost and risk of returning the goods to us. You should send the goods to the following address: 8270 Woodland Center Blvd, Tampa, FL 33614 USA. We cannot be held responsible for goods damaged or lost in return shipment. Therefore, we recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the goods or proof of received return delivery.',
      ],
    },
    {
      section: 'Gifts',
      content: [
        'If the goods were marked as a gift when purchased and then shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to you. If the goods weren’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give it to you later, We will send the refund to the gift giver.',
      ],
    },
    {
      section: 'Contact Us',
      content: [
        'If you have any questions about our Returns and Refunds Policy, please contact us by e-mail 123-printerlivesolution.com',
      ],
    },
    {
      section: 'Conditions for returns',
      content: [
        'In order for the goods to be eligible for a return, please make sure that:',
        '- The goods were purchased in the last 30 days',
        '- The goods are in the original packaging',
        '- The supply of goods made to your specifications or clearly personalized.',
        '- The supply of goods which according to their nature are not suitable to be returned, for example goods which deteriorate rapidly or where the date of expiry is over.',
        '- The supply of goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.',
        '- The supply of goods which are, after delivery, according to their nature, inseparably mixed with other items. We reserve the right to refuse returns of any merchandise that does not meet the above return conditions at our sole discretion.',
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-900 p-6 items-center flex flex-col">
      <h1 className="text-4xl text-[#1e3a8a] font-bold text-center p-2">
        Rufund and Return Policy
      </h1>

      <div className="border  w-[90%] p-7">
        {policyContent.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-[#1e3a8a]">
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

export default ReturnRefundsPolicy;
