import PropTypes from 'prop-types'

import Modal from "..";

const ModalWrapper = ({
  text,
  bodyText,
  className,
  hasImage,
  footerCancelBtn,
  firstText,
  footerDeleteBtn,
  secondText,
  footerAddToFavBtn,
  thirdText,
  modalIsOpen,
}) => {

  return (
    <div className="modalWrapper">
      <Modal
        text={text}
        bodyText={bodyText}
        className={className}
        hasImage={hasImage}
        footerCancelBtn={footerCancelBtn}
        firstText={firstText}
        footerDeleteBtn={footerDeleteBtn}
        secondText={secondText}
        footerAddToFavBtn={footerAddToFavBtn}
        thirdText={thirdText}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};

ModalWrapper.propTypes = {
  text: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  className: PropTypes.string,
  hasImage: PropTypes.oneOf(['true', 'false']).isRequired,
  footerCancelBtn: PropTypes.string,
  firstText: PropTypes.string,
  footerDeleteBtn: PropTypes.string,
  secondText: PropTypes.string,
  footerAddToFavBtn: PropTypes.string,
  thirdText: PropTypes.string,
  modalIsOpen: PropTypes.func.isRequired,
};

export default ModalWrapper;