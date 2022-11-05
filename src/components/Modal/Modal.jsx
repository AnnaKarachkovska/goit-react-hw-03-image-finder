import React from 'react';

import styles from './Modal.module.css';

class Modal extends React.Component {
  onBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown);
  };

  onKeydown = ev => {
    if (ev.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.onBackdropClick}>
        <div className={styles.modal}>
          <img src={this.props.largeUrl} alt="" />
        </div>
      </div>
    );
  };
};

export default Modal;