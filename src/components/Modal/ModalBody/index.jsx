import PropTypes from "prop-types";

const ModalBody = ({ bodyText }) => {
    return (
        <div className="modalBody">
            <p className="bodyText">{bodyText}</p>
        </div>
    );
};

ModalBody.propTypes = {
    bodyText: PropTypes.string.isRequired,
};

export default ModalBody;