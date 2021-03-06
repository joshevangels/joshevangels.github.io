import * as React from "react";
import * as ReactDOM from "react-dom";
import "./css/main.scss";
import { HomePage } from "./pages/Home.page";

const renderRootApp = () => {
    ReactDOM.render(React.createElement(HomePage, null),
                document.getElementById("root"));
};

renderRootApp();
