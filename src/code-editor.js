import "regenerator-runtime/runtime"; // needed for ``await`` support
import Base from "@patternslib/patternslib/src/core/base";
import Parser from "@patternslib/patternslib/src/core/parser";
import utils from "@patternslib/patternslib/src/core/utils";

export const parser = new Parser("code-editor");
parser.addArgument("language", null); // programming language to use.
parser.addArgument("linenumbers", false);
parser.addArgument("theme", null); // theme to use.

// CodeJar options
parser.addArgument("tab", "    "); // The tab-string. "\t" for real tabs.
parser.addArgument("indent-on", "{$");
parser.addArgument("spellcheck", false);
parser.addArgument("catch-tab", true);
parser.addArgument("preserve-ident", true);
parser.addArgument("add-closing", true);
parser.addArgument("history", true);

export default Base.extend({
    name: "code-editor",
    trigger: ".pat-code-editor",

    async init() {
        this.options = parser.parse(this.el, this.options);

        const CodeJar = (await import("codejar")).CodeJar;
        const Prism = (await import("prismjs")).default;

        let prism_wrapper = Prism.highlightElement;
        if (this.options.linenumbers) {
            const linenumbers = (await import("codejar/linenumbers")).withLineNumbers;
            prism_wrapper = linenumbers(Prism.highlightElement);
        }

        let el = this.el;
        if (["textarea", "input"].includes(this.el.nodeName.toLowerCase())) {
            const unescaped_html = utils.unescape_html(this.el.value);
            const language_class = this.options.language
                ? `language-${this.options.language}`
                : "";
            const pre_el = document.createElement("pre");
            el = document.createElement("code");
            el.setAttribute("class", language_class);
            el.setAttribute("contenteditable", "");
            el.style.display = "block";
            el.textContent = unescaped_html;
            pre_el.append(el);
            this.el.parentNode.insertBefore(pre_el, this.el);
            this.el.setAttribute("hidden", "");
        }

        if (this.options.language) {
            el.classList.add(`language-${this.options.language}`);
        }

        el.classList.add(`theme-${this.options.theme || "default"}`);

        import(
            `prismjs/themes/prism${
                this.options.theme ? "-" + this.options.theme : ""
            }.css`
        );
        //import("./code-editor.scss");

        // Allow spaces withing quotes to be added as tab argument.
        // Replace escaped tab character with real tab.
        const tab = this.options.tab
            .replace(/'/g, "") // Allow spaces within quotes
            .replace(/"/g, "")
            .replace(/\\t/g, "\t"); // Replace double escaped tab character

        const config = {
            tab: tab,
            indentOn: new RegExp(this.options.indentOn),
            spellcheck: this.options.spellcheck,
            catchTab: this.options.catchTab,
            preserveIdent: this.options.preserveIdent,
            addClosing: this.options.addClosing,
            history: this.options.history,
        };

        this.codeeditor = CodeJar(el, prism_wrapper, config);

        if (el !== this.el) {
            // Update <textarea> or <input>, if one of these were the
            // initializing elements.
            this.codeeditor.onUpdate((code) => {
                this.el.value = code;
            });
        }
    },
});
