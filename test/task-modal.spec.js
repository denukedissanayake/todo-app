import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import TaskModal from '../components/task-modal';

describe("components/task-modal.js", () => {

    it("Should render task modal", () => {
        const { getByText, getByTestId } = render(<TaskModal setShowLoginsModal={jest.fn()} />)

        expect(getByText("ADD")).toBeInTheDocument()
        expect(getByText("CANCEL")).toBeInTheDocument()
        expect(getByTestId("add-task-input")).toBeInTheDocument()
    })
})