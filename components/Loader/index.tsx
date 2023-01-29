import React from 'react';

import styles from './index.module.scss';

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.loader__spinner}></div>
  </div>
);

export default Loader;
