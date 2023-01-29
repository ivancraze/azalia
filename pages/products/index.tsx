import { useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { InferGetStaticPropsType } from 'next';

import { IProduct } from '@/types';
import { wrapper } from '@/store';
import { setProducts } from '@/store/slices/productsSlice';
import { useAppDispatch } from '@/hooks/storeHooks';
import { productApi } from '@/services/http';

import ProductCard from '@/components/ProductCard';
import CardsLayout from '@/components/layouts/CardsLayout';
import Banner from '@/components/Banner';

const Products: NextPage<{ data: IProduct[] }> = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts(data));
  }, []);

  return (
    <CardsLayout>
      <Banner />
      {data?.map((product: IProduct) => {
        return <ProductCard key={`product-${product.id}`} product={product} />;
      })}
    </CardsLayout>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const { data } = await store.dispatch(
      productApi.endpoints.products.initiate(undefined),
    );
    return {
      props: {
        data,
      },
    };
  },
);

export default Products;
