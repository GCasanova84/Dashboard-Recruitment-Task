import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { DashboardRouter } from './routers/DashboardRouter';

export const App = () => { 

  return (
    <Provider store={store}>
      <DashboardRouter />
    </Provider>
  )
}