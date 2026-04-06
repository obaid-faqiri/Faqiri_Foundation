const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="p-4 border rounded-lg cursor-pointer">

      <div
        className="flex items-center justify-between"
        onClick={onClick}
      >
        <h3 className="font-medium">{question}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
        <p className="mt-3 text-sm text-gray-600">
          {answer}
        </p>
      )}

    </div>
  );
};

export default FAQItem;