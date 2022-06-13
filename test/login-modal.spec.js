import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import LoginModal from '../components/login-modal';

describe("components/login-modal.js", () => {

    it("Should render login modal", () => {
        const { getByText, getByTestId } = render(<LoginModal setShowLoginsModal={jest.fn()} />)

        expect(getByText("LOGIN")).toBeInTheDocument()
        expect(getByText("CANCEL")).toBeInTheDocument()
        expect(getByTestId("login-email-input")).toBeInTheDocument()
        expect(getByTestId("login-password-input")).toBeInTheDocument()
    })
})