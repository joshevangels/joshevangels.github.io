import * as React from "react";

export interface IProjectCardProps {
    title: string;
    imgSrc?: string;
    description: string;
    liveLink: string;
    sourceLink: string;
}

export const ProjectCard: React.FunctionComponent<IProjectCardProps> = (props) => {
    const renderImage = props.imgSrc
        ? <img src={props.imgSrc}/>
        : null;

    return <div className="center card project-card">
        <h2 className="title">
            {props.title}
        </h2>
        <div className="card-image">
            {renderImage}
        </div>
        <p className="project-description">
            {props.description}
        </p>
        <div className="links">
            <a href={props.liveLink}>
                Live Here
            </a>
            <a href={props.sourceLink}>
                Source Code
            </a>
        </div>
    </div>;
};
