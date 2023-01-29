import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';

import '@/styles/globals.css';

import MainLayout from '@/components/layouts/MainLayout';
import { makeStore, wrapper } from '@/store';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic', 'latin'],
});

function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(makeStore);
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className={roboto.className}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </main>
      </PersistGate>
    </Provider>
  );
}

export default App;
