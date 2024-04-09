import PropTypes from "prop-types";

const ModalHeader = ({ children }) => {

    return (
        <h3 className="modalHeader">{children}</h3>
    )
}

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalHeader;