import PropTypes from "prop-types";

const ModalBackground = ({ modalIsOpen }) => {
  return <div onClick={modalIsOpen} className="modalBackground"></div>;
};

ModalBackground.propTypes = {
  modalIsOpen: PropTypes.func.isRequired,
};

export default ModalBackground;