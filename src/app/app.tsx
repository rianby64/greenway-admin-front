import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { AdminMap } from './admin-map';

render(
    (
    <React.StrictMode>
        <Provider store={store}>
            <AdminMap></AdminMap>
        </Provider>
    </React.StrictMode>
    ),
    document.getElementById("root")
);
