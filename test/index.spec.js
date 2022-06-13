import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import Home from '../pages/index';

describe("pages.index.js", () => {
    it("Should render navigation bar", () => {
        const { getByText } = render(<Home />)
        
        expect(getByText("ToDo-App")).toBeInTheDocument()
        expect(getByText("LOGIN")).toBeInTheDocument()
        expect(getByText("SIGNUP")).toBeInTheDocument()

    })

    it("Should render the empty task message for no tasks", () => {
        const { getByText } = render(<Home />)
        
        expect(getByText("No tasks available. Please add tasks")).toBeInTheDocument()

    })
})