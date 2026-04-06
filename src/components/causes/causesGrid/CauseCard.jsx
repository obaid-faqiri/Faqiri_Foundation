const CauseCard = ({ image, title, category }) => {
  return (
    <div className="overflow-hidden transition bg-white shadow-sm rounded-xl hover:shadow-md">

      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48"
      />

      <div className="p-4">

        <span className="text-sm text-green-600">
          {category}
        </span>

        <h3 className="mt-2 font-semibold">
          {title}
        </h3>

      </div>

    </div>
  );
};

export default CauseCard;