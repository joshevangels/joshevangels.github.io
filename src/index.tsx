import * as React from "react";
import * as ReactDOM from "react-dom";
import { HomePage } from "./pages/Home.page";
import "./css/main.scss";

const renderRootApp = () => {
    ReactDOM.render(React.createElement(HomePage, null),
                document.getElementById("root"));
};

renderRootApp();
