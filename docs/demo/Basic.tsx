import React from 'react';
import Ripple from 'react-ripple';
import styles from './basic.module.less';

export default () => {
  return (
    <div>
      <Ripple>
        <div className={styles.button}>React Ripple Button</div>
      </Ripple>
    </div>
  );
};
