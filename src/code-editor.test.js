import "regenerator-runtime/runtime"; // needed for ``await`` support
import Pattern from "./code-editor";
import utils from "@patternslib/patternslib/src/core/utils";

describe("pat-code-editor", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        document.body.innerHTML = `
            <textarea
                class="pat-code-editor"
                data-pat-code-editor="language: javascript"/>`;

        new Pattern(document.querySelector(".pat-code-editor"));
        await utils.timeout(1);

        expect(document.querySelectorAll("pre code").length).toBe(1);
        expect(document.querySelector("textarea").getAttribute("hidden")).toBe("");
    });
});
