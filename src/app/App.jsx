import React, {Component} from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, hashHistory} from "react-router";
import Menu from "./components/menu/Menu.jsx";
import Home from "./pages/home/Home.jsx";
import store from "./store";

class App extends Component {
    render(){
        return(
            <div>
                <h1>React</h1>
                <Menu/>
            </div>
        );
    }
}

const store1 = store();
ReactDom.render(
    <Provider store={store1}>
        <Router history={hashHistory}>
            <Route path="/" component={Home}/>
        </Router>
    </Provider>,
    document.getElementById("app")
);


