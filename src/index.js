import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./Data/redux-store";
import MainApp from "./App";

    ReactDOM.render(
        <React.StrictMode>

                <MainApp profileState={store.getState().profilePage}
                     dialogsState={store.getState().dialogsPage}
                     friendsState={store.getState().friendsPage}
                     dispatch={store.dispatch.bind(store)} />

        </React.StrictMode>,
        document.getElementById('root')
    );


serviceWorker.unregister();
