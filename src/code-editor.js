import { BasePattern } from "@patternslib/patternslib/src/core/basepattern";
import Parser from "@patternslib/patternslib/src/core/parser";
import events from "@patternslib/patternslib/src/core/events";
import registry from "@patternslib/patternslib/src/core/registry";

export const parser = new Parser("code-editor");
parser.addArgument("language", null); // programming language to use.
parser.addArgument("linenumbers", false);
parser.addArgument("theme", "dark"); // dark or light or any other theme variant.

// CodeJar options
parser.addArgument("tab", "    "); // The tab-string. "\t" for real tabs.
parser.addArgument("indent-on", "{$");
parser.addArgument("spellcheck", false);
parser.addArgument("catch-tab", true);
parser.addArgument("preserve-ident", true);
parser.addArgument("add-closing", true);
parser.addArgument("history", true);

const language_mapping = {
    atom: "xml",
    html: "xml",
    plist: "xml",
    rss: "xml",
    svg: "xml",
    wsf: "xml",
    xhtml: "xml",
    xjb: "xml",
    xsd: "xml",
    xsl: "xml",
};

class Pattern extends BasePattern {
    static name = "code-editor";
    static trigger = ".pat-code-editor";
    static parser = parser;

    async init() {
        const CodeJar = (await import("codejar")).CodeJar;
        const hljs = (await import("highlight.js/lib/core")).default;
        let el = this.el;

        // Set and load the theme.
        let theme;
        if (this.options.theme === "light") {
            theme = "stackoverflow-light";
        } else if (this.options.theme === "dark" || this.options.theme === "okaidia") {
            theme = "stackoverflow-dark";
        } else {
            theme = this.options.theme;
        }
        import(`highlight.js/styles/${theme}.css`);
        if (window.__patternslib_import_styles) {
            import("./_code-editor.scss");
        }

        // Custom hightlighting function, as of:
        // https://github.com/antonmedv/codejar/blob/master/index.html
        const highlight = (editor) => {
            // highlight.js does not trim old tags,
            // let's do it by this hack.
            editor.textContent = editor.textContent;
            hljs.highlightElement(editor);
        };
        let highlight_wrapper = highlight;

        // Optional line numbers.
        if (this.options.linenumbers) {
            const linenumbers = (await import("codejar/linenumbers")).withLineNumbers;
            highlight_wrapper = linenumbers(highlight, {
                class: `codejar-linenumbers ${theme}`,
            });
        }

        // Import and register the language.
        let language = [...el.classList].filter((it) => it.startsWith("language-"))[0];
        language = language ? language.replace("language-", "") : this.options.language;
        language = language || "plaintext";
        const hljs_language = (
            await import(
                `highlight.js/lib/languages/${language_mapping[language] || language}`
            )
        ).default;
        hljs.registerLanguage(language, hljs_language);

        // Create a editor element in case of an input element.
        if (["textarea", "input"].includes(this.el.nodeName.toLowerCase())) {
            const pre_el = document.createElement("pre");
            pre_el.innerHTML = `<code contenteditable></code>`;
            el = pre_el.querySelector("code");
            el.textContent = this.el.value; // value is already unescaped.
            this.el.parentNode.insertBefore(pre_el, this.el);
            this.el.setAttribute("hidden", "");
        }

        // Add some classes to the editor element.
        el.classList.add(
            "code-editor",
            `theme-${this.options.theme}`,
            `language-${language}`
        );

        // Allow spaces within quotes to be added as tab argument.
        // Replace escaped tab character with real tab.
        const tab = this.options.tab
            .replace(/'/g, "") // Allow spaces within quotes
            .replace(/"/g, "")
            .replace(/\\t/g, "\t"); // Replace double escaped tab character

        // Create the editor.
        const config = {
            tab: tab,
            indentOn: new RegExp(this.options.indentOn),
            spellcheck: this.options.spellcheck,
            catchTab: this.options.catchTab,
            preserveIdent: this.options.preserveIdent,
            addClosing: this.options.addClosing,
            history: this.options.history,
        };
        this.codeeditor = CodeJar(el, highlight_wrapper, config);

        // Update the input element.
        if (el !== this.el) {
            // Update <textarea> or <input>, if one of these were the
            // initializing elements.
            this.codeeditor.onUpdate((code) => {
                this.el.value = code.trim();
                this.el.dispatchEvent(events.input_event());
            });
        }
    }
}

registry.register(Pattern);

export default Pattern;
export { Pattern };
