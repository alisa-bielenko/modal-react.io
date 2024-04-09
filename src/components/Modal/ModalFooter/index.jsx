import Button from "../../Button";
import PropTypes from "prop-types";

const ModalFooter = ({
    footerCancelBtn,
    firstText,
    footerDeleteBtn,
    secondText,
    footerAddToFavBtn,
    thirdText,
    modalIsOpen,

}) => {
    return (
        <div className="footer">
            {footerCancelBtn === "true" && (
                <Button onClick={modalIsOpen} className="openFirstModalBtn">{firstText}</Button>
            )}
            {footerDeleteBtn === "true" && (
                <Button className="openSecondModalBtn">{secondText}</Button>
            )}
            {footerAddToFavBtn === "true" && (
                <Button className="openFirstModalBtn">{thirdText}</Button>
            )}
        </div>
    );
};

ModalFooter.propTypes = {
    footerCancelBtn: PropTypes.oneOf(['true', 'false']).isRequired,
    firstText: PropTypes.string,
    footerDeleteBtn: PropTypes.oneOf(['true', 'false']).isRequired,
    secondText: PropTypes.string,
    footerAddToFavBtn: PropTypes.oneOf(['true', 'false']).isRequired,
    thirdText: PropTypes.string.isRequired,
    modalIsOpen: PropTypes.func.isRequired,
    firstClick: PropTypes.func.isRequired,
    secondaryClick: PropTypes.func.isRequired,
};

export default ModalFooter;