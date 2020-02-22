import * as React from "react";
import { InfoCard } from "../components/InfoCard";
import { ProjectCard } from "../components/ProjectCard";
import ColorLogo from "../images/color-orbment.svg";
import PhantomHourglass from "../images/PHSPT.png";

export const HomePage: React.FunctionComponent = () => {
    return (
        <div className="homepage">
            <main className="center">
                <h1 className="header">
                    Info
                </h1>
                <div className="info-section">
                    <div className="intro">
                        <p><b>Hello!</b></p>
                        <p>Welcome to my homepage</p>
                        <p>
                            This is verison 1.0 of this page so it
                            will hopefully be updated on a semi-regular basis.
                        </p>
                    </div>
                    <InfoCard/>
                </div>
                <h2 className="header">
                    Current Projects
                </h2>
                <div className="project-section card-group">
                    <ProjectCard
                        title="Homepage"
                        imgSrc={ColorLogo}
                        description="This Page! Will probably be updated more often
                        than the other projects here."
                        liveLink="https://joshevangels.github.io/"
                        sourceLink=""
                    />
                    <ProjectCard
                        title="Ship Part Tracker"
                        imgSrc={PhantomHourglass}
                        description="A small web app built to track and calculate the bonuses
                        of the ship parts in the Nintendo DS game: Legend Of Zelda: Phantom
                        Hourglass."
                        liveLink="https://joshevangels.github.io/phantom-hourglass-ship-part-tracker/"
                        sourceLink=""
                    />
                </div>
                <h2 className="header">
                    Coming Soon...
                </h2>
                <div className="coming-section card-group">
                    <img src={ColorLogo}/>
                    <img src={ColorLogo}/>
                </div>
            </main>
        </div>
    );
};
