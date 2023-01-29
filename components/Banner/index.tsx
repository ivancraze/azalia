import Image from 'next/image';

import styles from './index.module.scss';

import arrow from '@/public/assets/icons/arrow.svg';
import bannerFirst from '@/public/assets/banners/banner 1.svg';
import bannerSecond from '@/public/assets/banners/banner 2.svg';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h2 className={styles.banner__title}>Все для комфортной работы</h2>
      <a href="#">
        <Image src={arrow} alt={'arrow'} />
      </a>
      <a href="#">
        <Image src={bannerFirst} alt={'Выбрать скидку'} />
      </a>
      <a href="#">
        <Image src={bannerSecond} alt={'Выбрать скидку'} />
      </a>
    </div>
  );
};

export default Banner;
