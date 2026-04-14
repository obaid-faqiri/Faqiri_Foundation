const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className="min-h-[80px] p-4 border rounded-lg cursor-pointer bg-[#F4F3E8] flex flex-col justify-center"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium">{question}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && <p className="mt-3 text-sm text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQItem;
