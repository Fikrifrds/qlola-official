import React, { useEffect } from 'react';

export default ({ children, isOpen, onClose }) => {
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
    <div className={className.join(' ')} onClick={onClose}>
      <div className="modal">
        {children}
      </div>
    </div>
  );
};
