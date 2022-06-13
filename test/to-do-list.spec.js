import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import TodoList from '../components/to-do-list';

describe("components/to-to-list.js", () => {
    const tasks = [
        {
            id: 1,
            task: "Complete the Course",
            status: "TODO",
        },
        {
            id: 2,
            task: "Buy Milk and Eggs",
            status: "INGOING",
        },
        {
            id: 3,
            task: "Write test cases",
            status: "DONE",
        }
    ]

    it("Should render a todo list", () => {
        const { getByText } = render(<TodoList tasks={tasks} fetchTasks={jest.fn()} />)
        
        /* 
            Render the main categories
        */
        expect(getByText("Todo Tasks")).toBeInTheDocument()
        expect(getByText("Ongoing Tasks")).toBeInTheDocument()
        expect(getByText("Completed Tasks")).toBeInTheDocument()

        /* 
            Render the task details
        */
        expect(getByText("Complete the Course")).toBeInTheDocument()
        expect(getByText("START")).toBeInTheDocument()
        expect(getByText("Buy Milk and Eggs")).toBeInTheDocument()
        expect(getByText("DONE")).toBeInTheDocument()
        expect(getByText("Write test cases")).toBeInTheDocument()
        expect(getByText("RE-START")).toBeInTheDocument()
    })
})