import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, isOpen, onClose }) => {
  const className = ['modal-container'];
  if (isOpen) {
    className.push(`${className[0]}__open`);
  }

  useEffect(() => {
    const onPressEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener('keydown', onPressEscape);
    return () => document.removeEventListener('keydown', onPressEscape);
  }, [onClose]);

  return (
    <div className={className.join(' ')} onClick={onClose} aria-hidden="true">
      <div className="modal">
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
