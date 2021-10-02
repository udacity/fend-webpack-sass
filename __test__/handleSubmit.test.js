import { handleSubmit } from "../src/client/js/formHandler";



describe("Testing the submit functionality", () => {

    test("Testing the handleSubmit definition", () => {
           expect(handleSubmit).toBeDefined();
})});

describe("Testing function calls", () => {

    test("Testing button onClick", () => {

        fireEvent(
            document.querySelector('input[type="submit"]'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            }),
          )
          
           expect(handleSubmit).toHaveBeenCalledTimes(1);
})});
