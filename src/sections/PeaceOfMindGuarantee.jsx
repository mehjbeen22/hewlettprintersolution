import React from 'react';

const PeaceOfMindGuarantee = () => {
  return (
    <main className="bg-white text-[#1e3a8a] p-6">
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Peace of Mind Guarantee</h3>
            <p className="text-gray-700">
              We're committed to your complete satisfaction with our service. If
              you're not 100% happy, we'll do whatever it takes to make it
              right.
            </p>
          </div>
        </div>
        <div>
          <picture>
            <source
              srcSet="https://cdn.hellotech.com/client-assets/peace-of-mind_7be34957380ae5bddb3b13b503a6b935.jpg"
              type="image/jpeg"
            />
            <img
              alt="Peace of Mind Guarantee"
              src="https://cdn.hellotech.com/client-assets/peace-of-mind_7be34957380ae5bddb3b13b503a6b935.jpg"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </picture>
        </div>
      </section>
    </main>
  );
};

export default PeaceOfMindGuarantee;
