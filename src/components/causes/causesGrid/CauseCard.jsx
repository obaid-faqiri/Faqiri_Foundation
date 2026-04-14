const CauseCard = ({ image, title, category }) => {
  return (
    <div className="overflow-hidden transition bg-white shadow-sm rounded-xl hover:shadow-md">
      <img
        src={image}
        alt={title}
        className="object-cover object-top w-full h-48"
      />

      <div className="p-4">
        <span className="text-base text-green-600">{category}</span>

        <h3 className="mt-2 text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default CauseCard;
