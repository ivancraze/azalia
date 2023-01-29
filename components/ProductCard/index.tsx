import Image from 'next/image';
import React from 'react';
import { IProduct } from '@/types';

import styles from './index.module.scss';

import AddButton from '@/components/ProductCard/components/AddButton';
import StarRating from '@/components/ProductCard/components/Rating';
import Favorite from '@/components/ProductCard/components/Favorite';
import Hit from '@/components/ProductCard/components/Hit';
import Price from '@/components/ProductCard/components/Price';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }): JSX.Element => {
  return (
    <div className={styles.productCard__container}>
      {product.rating.count > 300 && <Hit />}
      <div className={styles.productCard__image}>
        <Image
          src={product.image}
          alt={product.title}
          width={220}
          height={220}
        />
      </div>
      <div className={styles.productCard__category}>
        <span className={styles.productCard__categoryText}>
          {product.category}
        </span>
        <StarRating rating={product.rating} />
      </div>
      <div className={styles.productCard__title}>{product.title}</div>
      <Price price={product.price} />
      <div className={styles.productCard__buttons}>
        <AddButton product={product} />
        <Favorite product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
