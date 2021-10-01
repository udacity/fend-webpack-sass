import { checkURL } from "../src/client/js/URLChecker";


describe("Testing the submit functionality", () => {

    test("Testing the handleSubmit definition", () => {
           expect(checkURL).toBeDefined();
})});

describe("Testing the function output", () => {

    test("Testing the checkURL() function output", () => {
        
        expect(checkURL("dummy")).toEqual(false);
})});