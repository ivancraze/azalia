import React from 'react';

import styles from './index.module.scss';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => (
  <div className={styles.mainLayout}>{children}</div>
);

export default MainLayout;
