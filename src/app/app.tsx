import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AdminMap } from './admin-map';
import { store } from '../redux/store';

render(
    (
        <Provider store={store} >
            <AdminMap />
        </Provider>
    ),
    document.getElementById("root")
);
