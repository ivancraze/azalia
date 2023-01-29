import React, { memo, useState } from 'react';
import Image from 'next/image';

import { IProduct } from '@/types';
import { useAppDispatch } from '@/hooks/storeHooks';
import { addToCart, removeFromCart } from '@/store/slices/cartSlice';

import styles from './index.module.scss';

import plus from '@/public/assets/icons/plus.svg';
import minus from '@/public/assets/icons/minus.svg';

interface IAddButtonProps {
  product: IProduct;
}

const AddButton: React.FC<IAddButtonProps> = ({ product }): JSX.Element => {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<number>(1);
  const [productInCart, setProductInCart] = useState<boolean>(false);

  const onIncrementClick = (): void => {
    setAmount(amount + 1);
  };

  const onDecrementClick = (): void => {
    // В корзину положить можно минимум 1 штуку
    if (amount === 1) return;
    setAmount(amount - 1);
  };

  const onAddClick = (): void => {
    setProductInCart(true);
    dispatch(addToCart({ product, amount }));
  };

  const onRemoveClick = (): void => {
    setProductInCart(false);
    dispatch(removeFromCart(product));
  };

  return (
    <div className={styles.buttonsContainer}>
      {productInCart ? (
        <button
          className={`${styles.button} ${styles.button__InCart}`}
          onClick={onRemoveClick}
          type="button"
        >
          В корзине
        </button>
      ) : (
        <>
          <button
            className={`${styles.button} ${styles.button__AddToCart}`}
            onClick={onAddClick}
            type="button"
          >
            В корзину
          </button>
          <button
            className={`${styles.button} ${styles.button__Decrement}`}
            onClick={onDecrementClick}
            type="button"
          >
            <Image src={minus} alt="-" width={10} height={10} />
          </button>
          <span className={styles.amount}>{amount}</span>
          <button
            className={`${styles.button} ${styles.button__Increment}`}
            onClick={onIncrementClick}
            type="button"
          >
            <Image src={plus} alt="+" width={10} height={10} />
          </button>
        </>
      )}
    </div>
  );
};

export default memo(AddButton);
