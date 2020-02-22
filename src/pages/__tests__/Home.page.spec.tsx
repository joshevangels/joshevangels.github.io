import { shallow } from "enzyme";
import * as React from "react";
import { InfoCard } from "../../components/InfoCard";
import { ProjectCard } from "../../components/ProjectCard";
import { HomePage } from "../Home.page";

describe("Page Component", () => {
    it("renders the main section", () => {
        const subject = shallow(<HomePage/>);

        const main = subject.find("main");

        expect(main.exists()).toBe(true);
    });

    it("renders a card", () => {
        const subject = shallow(<HomePage/>);

        const card = subject.find(InfoCard);

        expect(card.exists()).toBe(true);
    });

    it("renders ProjectCard components", () => {
        const subject = shallow(<HomePage/>);

        const cards = subject.find(ProjectCard);

        expect(cards.length).toBeGreaterThan(0);
    });
});
