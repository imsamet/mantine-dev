'use client';

import { Provider } from 'react-redux';
import { persistor, store } from '../store/index';

import { createTheme, MantineProvider } from '@mantine/core';
import { PersistGate } from 'redux-persist/integration/react';

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = createTheme({});
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </PersistGate>
    </Provider>
  );
}
