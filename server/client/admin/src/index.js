import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './reducers';
import AdminRouter from './router';
import Header from './components/Header';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <Header/>
      <AdminRouter/>
    </div>
  </Provider>
);

export default App;


ReactDOM.render(<App/>, document.getElementById('root'));
