import React from 'react';

import styles from './index.module.scss';
import { USD_TO_RUB_CONVERT_COURSE } from '@/constants';

interface IPriceProps {
  price: number;
}
const Price: React.FC<IPriceProps> = ({ price }) => {
  const priceUsdToRub = (price: number): string => {
    return Math.ceil(price * USD_TO_RUB_CONVERT_COURSE).toLocaleString();
  };

  return (
    <div className={styles.price}>
      {priceUsdToRub(price)} ₽<span>/шт.</span>
    </div>
  );
};
export default Price;
