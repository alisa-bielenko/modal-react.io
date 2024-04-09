import PropTypes from 'prop-types'
import ModalImage from "./ModalImage";
import ModalHeader from "./ModalHeader";
import ModalClose from "./ModalClose";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalBackground from "./ModalBackground";


const Modal = ({
    text,
    className,
    bodyText,
    hasImage,
    footerCancelBtn,
    firstText,
    footerDeleteBtn,
    secondText,
    footerAddToFavBtn,
    thirdText,
    modalIsOpen,
    firstClick,
    secondaryClick,
}) => {

    return (
        <>
            <div className={className}>
                {hasImage === "true" && <ModalImage />}
                <ModalHeader>{text}</ModalHeader>
                <ModalClose modalIsOpen={modalIsOpen} />
                <ModalBody bodyText={bodyText} />
                <ModalFooter
                    footerCancelBtn={footerCancelBtn}
                    firstText={firstText}
                    footerDeleteBtn={footerDeleteBtn}
                    secondText={secondText}
                    footerAddToFavBtn={footerAddToFavBtn}
                    thirdText={thirdText}
                    modalIsOpen={modalIsOpen}
                    firstClick={() => { }}
                    secondaryClick={() => { }}
                />

            </div>

            <ModalBackground modalIsOpen={modalIsOpen} />
        </>
    );
};

Modal.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    hasImage: PropTypes.oneOf(['true', 'false']).isRequired,
    footerCancelBtn: PropTypes.string,
    firstText: PropTypes.string,
    footerDeleteBtn: PropTypes.string,
    secondText: PropTypes.string,
    footerAddToFavBtn: PropTypes.string,
    thirdText: PropTypes.string,
    modalIsOpen: PropTypes.func.isRequired,
};

export default Modal;