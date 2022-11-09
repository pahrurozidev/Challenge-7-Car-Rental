import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/Routes'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer/globalReducer';

// styling
// import "./assets/bootstrap-5.2.0-dist/css/bootstrap.min.css";
// import "./assets/bootstrap-5.2.0-dist/js/bootstrap.min.js";
// import "./assets/css/style.css";

const storeRedux = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <Routes />
    </Provider>
  </React.StrictMode>
)
