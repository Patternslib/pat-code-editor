import "regenerator-runtime/runtime"; // needed for ``await`` support
import pattern from "./code-editor";
import utils from "patternslib/src/core/utils";

describe("pat-code-editor", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async (done) => {
        document.body.innerHTML = `<div class="pat-code-editor" />`;

        const instance = pattern.init(
            document.querySelector(".pat-code-editor")
        );
        await utils.timeout(1);

        expect().toBe("");

        done();
    });
});
