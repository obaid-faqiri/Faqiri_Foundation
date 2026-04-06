const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const base =
    "rounded-full font-semibold transition duration-300 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-[#0e3b3b] text-green-200 hover:bg-violet-400 hover:text-green-900",
    outline:
      "border border-[#0e3b3b] text-[#0e3b3b] hover:bg-[#0e3b3b] hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
