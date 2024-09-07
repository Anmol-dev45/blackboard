/* eslint-disable react/prop-types */
const Button = ({ onClick = () => {}, selected = false, Icon, ...props }) => {
  return (
    <button
      className={`${
        selected && "shadow-[0_0_0_2px_rgba(255,255,255,0.5)]"
      } p-2 bg-gray-800 text-white rounded-md transition-all duration-300`}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
