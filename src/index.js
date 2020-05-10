import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App'
import postReducer from './reducers/postReducer';

const store = createStore(postReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root')
);

