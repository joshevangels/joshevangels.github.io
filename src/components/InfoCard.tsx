import * as React from "react";
import Logo from "../images/grey-orbment.svg";

export const InfoCard: React.FunctionComponent = () => {
    return <div className="center card info-card">
        <h1 className="name">
            Joshua Evangelista
        </h1>
        <h2 className="title">
            Software Engineer
        </h2>
        <address className="address">
            Chicago, IL
        </address>
        <img height="100px" src={Logo}/>
        <span>
            <dl>
                <dd>
                    <a href="https://joshevangels.github.io/">Homepage</a>
                </dd>
                <dd>
                    <a href="https://github.com/joshevangels">GitHub</a>
                </dd>
                <dd>
                    <a href="https://www.linkedin.com/in/josh-evangelista/">LinkedIn</a>
                </dd>
            </dl>
        </span>
    </div>;
};
