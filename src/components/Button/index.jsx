import PropTypes from "prop-types";

const Button = ({
  type = "button",
  className = "openFirstModalBtn",
  onClick,
  children,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;