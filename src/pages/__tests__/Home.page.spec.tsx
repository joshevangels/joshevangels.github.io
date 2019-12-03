import {shallow} from "enzyme";
import * as React from "react";
import { HomePage } from "../Home.page";

describe("Page Component", () => {
    it("renders the header component", () => {
        const subject = shallow(<HomePage/>);

        const header = subject.find("header");

        expect(header.exists()).toBe(true);
    });

    it("renders the main section", () => {
        const subject = shallow(<HomePage/>);

        const header = subject.find("header");

        expect(header.exists()).toBe(true);
    });
});
