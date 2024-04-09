import React, { useState } from 'react';
import './App.css';
import Button from "./components/Button";
import ModalWrapper from "./components/Modal/ModalWrapper";
import "./styles.scss";

function App() {
    const [isOpenFirstModal, setIsOpenFirstModal] = useState(false);
    const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);

    const openModalHandler = (modalType) => {
        if (modalType === 'first') {
            setIsOpenFirstModal(prevState => !prevState);
        } else if (modalType === 'second') {
            setIsOpenSecondModal(prevState => !prevState);
        }
    };

    return (
        <>
            <div className="buttonsContainer">
                <Button
                    type="button"
                    className="openFirstModalBtn"
                    onClick={() => openModalHandler('first')}
                >
                    Open first modal
                </Button>

                <Button
                    type="button"
                    className="openSecondModalBtn"
                    onClick={() => openModalHandler('second')}
                >
                    Open second modal
                </Button>
            </div>

            {isOpenFirstModal && (
                <ModalWrapper
                    text="Product Delete"
                    bodyText="By clicking the “YES, DELETE” button, PRODUCT NAME will be deleted."
                    className="modal"
                    hasImage="true"
                    footerCancelBtn="true"
                    firstText="NO, CANCEL"
                    footerDeleteBtn="true"
                    secondText="YES, DELETE"
                    footerAddToFavBtn="false"
                    thirdText=""
                    modalIsOpen={() => setIsOpenFirstModal(prevState => !prevState)}
                />
            )}

            {isOpenSecondModal && (
                <ModalWrapper
                    text="Add product 'NAME'"
                    bodyText="Description for you product"
                    className="modal"
                    hasImage="false"
                    footerCancelBtn="false"
                    footerDeleteBtn="false"
                    footerAddToFavBtn="true"
                    thirdText="ADD TO FAVORITE"
                    modalIsOpen={() => setIsOpenSecondModal(prevState => !prevState)}
                />
            )}
        </>
    );
}

export default App;  