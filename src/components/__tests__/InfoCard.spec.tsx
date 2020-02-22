import { shallow } from "enzyme";
import * as React from "react";
import { InfoCard } from "../InfoCard";

describe("InfoCard Component", () => {
    it("renders a card", () => {
        const subject = shallow(<InfoCard/>);

        const card = subject.find(".card");

        expect(card.exists()).toBe(true);
    });
});
