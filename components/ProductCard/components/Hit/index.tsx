import React from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

import hit from '@/public/assets/icons/hit.svg';

const Hit: React.FC = ({}) => {
  return (
    <Image className={styles.hit} alt="" src={hit} width={64} height={24} />
  );
};

export default Hit;
