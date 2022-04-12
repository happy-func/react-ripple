import React from 'react';
import ReactRippleButton from 'react-ripple-button';
import styles from './basic.module.less';

export default () => {
  return (
    <ReactRippleButton>
      <div className={styles.button}>React Ripple Button</div>
    </ReactRippleButton>
  );
};
