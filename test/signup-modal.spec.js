import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import SignupModal from '../components/signup-modal';

describe("components/signup-modal.js", () => {

    it("Should render signup modal", () => {
        const { getByText, getByTestId } = render(<SignupModal setShowSignupModal={jest.fn()} />)

        expect(getByText("SIGNUP")).toBeInTheDocument()
        expect(getByText("CANCEL")).toBeInTheDocument()
        expect(getByTestId("signup-email-input")).toBeInTheDocument()
        expect(getByTestId("signup-password-input")).toBeInTheDocument()
    })
})