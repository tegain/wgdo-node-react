import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './reducers';
import AdminRouter from './router';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <AdminRouter/>
    </div>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
