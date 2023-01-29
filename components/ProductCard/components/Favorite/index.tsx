import React, { useState } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

import { useAppDispatch } from '@/hooks/storeHooks';
import { IProduct } from '@/types';
import {
  addToFavorites,
  removeFromFavorites,
} from '@/store/slices/favoriteSlice';

import favoriteActive from '@/public/assets/icons/favorite-active.svg';
import favorite from '@/public/assets/icons/favorite.svg';

interface IFavoriteProps {
  product: IProduct;
}

const Favorite: React.FC<IFavoriteProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [productInFavorites, setProductInFavorites] = useState<boolean>(false);

  const onAddClick = (): void => {
    setProductInFavorites(true);
    dispatch(addToFavorites({ product }));
  };

  const onRemoveClick = (): void => {
    setProductInFavorites(false);
    dispatch(removeFromFavorites(product));
  };

  return (
    <div className={styles.favorites__container}>
      {productInFavorites ? (
        <Image
          src={favoriteActive}
          alt="delete from favorites"
          onClick={onRemoveClick}
          width={40}
          height={40}
        />
      ) : (
        <Image
          src={favorite}
          alt="add to favorites"
          onClick={onAddClick}
          width={40}
          height={40}
        />
      )}
    </div>
  );
};

export default Favorite;
