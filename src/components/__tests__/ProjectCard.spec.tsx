import { shallow } from "enzyme";
import * as React from "react";
import { IProjectCardProps, ProjectCard } from "../ProjectCard";

describe("ProjectCard Component", () => {

    const defaultProps: IProjectCardProps = {
        title: "",
        description: "",
        liveLink: "",
        sourceLink: "",
    };

    it("renders a card", () => {
        const subject = shallow(<ProjectCard {...defaultProps}/>);

        const card = subject.find(".card");

        expect(card.exists()).toBe(true);
    });

    it("renders a title", () => {
        const subject = shallow(<ProjectCard {...defaultProps} title="Title"/>);

        const card = subject.find(".card");

        expect(card.find("h2").text()).toBe("Title");
    });

    it("renders a image when image source passed in", () => {
        const subject = shallow(<ProjectCard {...defaultProps} imgSrc="../image.url"/>);

        const card = subject.find(".card");

        expect(card.find("img").props().src).toBe("../image.url");
    });

    it("does not render a image when image source is not passed in", () => {
        const subject = shallow(<ProjectCard {...defaultProps} imgSrc={undefined}/>);

        const card = subject.find(".card");

        expect(card.find("img").exists()).toBe(false);
    });

    it("renders a description", () => {
        const subject = shallow(<ProjectCard {...defaultProps} description="description"/>);

        const card = subject.find(".card");

        expect(card.find(".project-description").text()).toBe("description");
    });
});
