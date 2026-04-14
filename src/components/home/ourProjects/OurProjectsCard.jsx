const OurProjectsCard = ({ image, category, title, description }) => {
  return (
    <div className="group">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48 mb-4 transition rounded-xl group-hover:scale-105"
      />

      <p className="mb-1 text-xs text-gray-400 lg:text-lg">{category}</p>

      <h3 className="mb-2 text-lg font-semibold lg:text-2xl">{title}</h3>

      <p className="mb-3 text-sm text-gray-500 lg:text-base">{description}</p>

      <button className="text-sm font-medium text-teal-700 transition-transform ease-in-out hover:scale-110 hover:text-violet-300 lg:text-lg lg:font-normal">Read more →</button>
    </div>
  );
};

export default OurProjectsCard;
