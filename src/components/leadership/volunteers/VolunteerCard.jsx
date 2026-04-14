import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const VolunteerCard = ({ image, name, role }) => {
  return (
    <div>
      <img
        src={image}
        className="object-cover object-top w-full h-64 rounded-xl"
      />

      <h3 className="mt-3 text-xl font-semibold">{name}</h3>
      <p className="my-3 text-base text-gray-500">{role}</p>

      <div className="flex gap-3 mt-2 text-xl text-gray-500 justify-right">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default VolunteerCard;
