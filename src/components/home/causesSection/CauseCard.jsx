const CauseCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex gap-4 p-5 transition duration-300 rounded-xl bg-teal-800/40 hover:bg-teal-800/60">
      {/* Icon */}
      <div className="flex-shrink-0 text-2xl text-green-400">
        <Icon />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="mt-1 text-gray-300 text-[12px]">{description}</p>
      </div>
    </div>
  );
};

export default CauseCard;
