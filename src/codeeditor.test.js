import "regenerator-runtime/runtime"; // needed for ``await`` support
import pattern from "./codeeditor";
import utils from "patternslib/src/core/utils";

describe("pat-codeeditor", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async (done) => {
        document.body.innerHTML = `<div class="pat-codeeditor" />`;

        const instance = pattern.init(
            document.querySelector(".pat-codeeditor")
        );
        await utils.timeout(1);

        expect().toBe("");

        done();
    });
});
