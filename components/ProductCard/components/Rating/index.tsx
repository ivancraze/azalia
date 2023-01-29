import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

import starActive from '../../../../public/assets/icons/star-active.svg';
import starEmpty from '../../../../public/assets/icons/star-empty.svg';

interface IStarRatingProps {
  rating: {
    rate: number;
    count: number;
  };
}

const StarRating: React.FC<IStarRatingProps> = ({ rating }) => {
  const wordForm = (num: number): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    const word = ['отзыв', 'отзыва', 'отзывов'];
    return word[
      num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
    ];
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} role="img" aria-label="star">
      {i < rating.rate ? (
        <Image src={starActive} alt="star-active" width={14} height={14} />
      ) : (
        <Image src={starEmpty} alt="star-empty" width={14} height={14} />
      )}
    </span>
  ));

  return (
    <span className={styles.rating__container}>
      {stars}
      <Link className={styles.rating__review} href="#">{`${
        rating.count
      } ${wordForm(rating.count)}`}</Link>
    </span>
  );
};

export default StarRating;
