import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen  } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});
    

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);

    const firstNameField = screen.getByLabelText(/first name/i);
    const lastNameField = screen.getByLabelText(/last name/i);
    const addressField = screen.getByLabelText(/address/i);
    const cityField = screen.getByLabelText(/city/i);
    const stateField = screen.getByLabelText(/state/i);
    const zipField = screen.getByLabelText(/zip/i);
    

    userEvent.type(firstNameField, "jessica");
    userEvent.type(lastNameField, "prosper");
    userEvent.type(addressField, "1234 North Park Road");
    userEvent.type(cityField, "orlando");
    userEvent.type(stateField, "florida");
    userEvent.type(zipField, "33324");

});
    