import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import AppTheme from './theme/AppTheme';
import { persistor, store } from './store';
import { AppNavBar } from '../src/cajero/components';
import { AppRouter } from './router/AppRouter';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppTheme>
                    <AppNavBar />
                    <AppRouter />
                </AppTheme>
            </PersistGate>
        </Provider>
    )
};

export default App
