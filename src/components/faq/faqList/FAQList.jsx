import { useState } from "react";
import { faqData } from "./faqData";
import FAQItem from "./FAQItem";

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-10 lg:py-16">
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="px-10 py-5 text-3xl font-bold text-center lg:px-24 lg:mx-16 lg:mb-24 lg:text-5xl">
          The most common questions
        </h1>

        {faqData.map((item, index) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQList;
