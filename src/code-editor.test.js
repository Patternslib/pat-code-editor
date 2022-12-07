import Pattern from "./code-editor";
import utils from "@patternslib/patternslib/src/core/utils";
import events from "@patternslib/patternslib/src/core/events";

describe("pat-code-editor", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        document.body.innerHTML = `
            <textarea
                class="pat-code-editor"
                data-pat-code-editor="language: javascript"/>`;

        const instance = new Pattern(document.querySelector(".pat-code-editor"));
        events.await_pattern_init(instance);

        expect(document.querySelectorAll("pre code").length).toBe(1);
        expect(document.querySelector("textarea").getAttribute("hidden")).toBe("");
    });

    it("handles escaped content correctly", async () => {
        const unescaped = `<hello attribute="value">this & that</hello>`;
        const escaped = `&lt;hello attribute=&quot;value&quot;&gt;this &amp; that&lt;/hello&gt;`;

        document.body.innerHTML = `
            <textarea
                class="pat-code-editor"
                data-pat-code-editor="language: javascript">
                ${escaped}
            </textarea>
        `;

        const instance = new Pattern(document.querySelector(".pat-code-editor"));
        events.await_pattern_init(instance);

        const editor_el = document.querySelector("pre code");
        expect(editor_el.textContent.trim()).toBe(unescaped);

        expect(editor_el.querySelectorAll(".token").length).toBeGreaterThan(0);
        expect(editor_el.innerHTML.includes("&lt;")).toBe(true);
    });

    it("Emits input events on update.", async () => {
        document.body.innerHTML = `
            <textarea class="pat-code-editor"></textarea>
        `;

        const el = document.querySelector(".pat-code-editor");

        const instance = new Pattern(el);
        events.await_pattern_init(instance);

        const editor_el = document.querySelector("pre code");

        let changed = false;
        el.addEventListener("input", () => {
            changed = true;
        });

        editor_el.innerHTML = "okay-ish";
        editor_el.dispatchEvent(new Event("keyup")); // codejar listens on keyup.
        await utils.timeout(1);

        expect(el.value).toBe("okay-ish");
        expect(changed).toBe(true);
    });
});
