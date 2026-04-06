import { useState } from "react";
import { faqData } from "./faqData";
import FAQItem from "./FAQItem";

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-4">

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