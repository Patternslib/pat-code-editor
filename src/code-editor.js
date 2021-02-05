import "regenerator-runtime/runtime"; // needed for ``await`` support
import Base from "patternslib/src/core/base";
import Parser from "patternslib/src/core/parser";

const parser = new Parser("code-editor");

parser.addArgument("language", null); // programming language to use.
parser.addArgument("linenumbers", true);
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

        let CodeJar = await import("codejar");
        CodeJar = CodeJar.CodeJar;
        let Prism = await import("prismjs");
        Prism = Prism.default;

        let prism_wrapper = (...args) => Prism.highlightElement(...args);
        if (this.options.linenumbers) {
            let linenumbers = await import("codejar/linenumbers");
            linenumbers = linenumbers.withLineNumbers;
            prism_wrapper = linenumbers(Prism.highlightElement);
        }

        let el = this.el;
        if (["textarea", "input"].includes(this.el.nodeName.toLowerCase())) {
            el = document.createElement("pre");
            el.innerHTML = `<code contenteditable>${this.el.value}</code>`;
            this.el.parentNode.insertBefore(el, this.el);
            this.el.setAttribute("hidden", "");
        }

        if (this.options.language) {
            el.classList.add(`language-${this.options.language}`);
        }

        import(
            `prismjs/themes/prism${
                this.options.theme ? "-" + this.options.theme : ""
            }.css`
        );

        const config = {
            tab: this.options.tab,
            indentOn: this.options.indentOn,
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
