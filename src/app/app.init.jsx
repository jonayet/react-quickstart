import React, {Component} from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {Router, hashHistory} from "react-router";
import store from "./store";
import {routes} from './routes.jsx';

ReactDom.render(
    <Provider store={store()}>
        <Router history={hashHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById("app")
);


