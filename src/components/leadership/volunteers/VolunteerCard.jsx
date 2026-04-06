import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const VolunteerCard = ({ image, name, role }) => {
  return (
    <div className="text-center">

      <img
        src={image}
        className="object-cover w-full h-48 rounded-xl"
      />

      <h3 className="mt-3 font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>

      <div className="flex justify-center gap-3 mt-2 text-gray-500">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>

    </div>
  );
};

export default VolunteerCard;