import React from 'react';

import styles from './index.module.scss';

interface ICardsLayoutProps {
  children: React.ReactNode;
}

const CardsLayout = ({ children }: ICardsLayoutProps) => (
  <div className={styles.cardsLayout}>{children}</div>
);

export default CardsLayout;
