import { useEffect } from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, isOpen, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.modalWrapper} onClick={handleBackdropClick}>
        {image && (
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={s.modalImage}
            onClick={closeModal}
          />
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
