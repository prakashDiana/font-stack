// Font stacks data
const fontStacks = [
    {
        name: "System UI",
        css: "system-ui, sans-serif",
        label: "System UI (default OS font stack)"
    },
    {
        name: "Arial",
        css: "Arial, Helvetica, sans-serif",
        label: "Arial, Helvetica, sans-serif"
    },
    {
        name: "Helvetica Neue",
        css: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        label: "Helvetica Neue, Helvetica, Arial, sans-serif"
    },
    {
        name: "Georgia",
        css: "Georgia, 'Times New Roman', Times, serif",
        label: "Georgia, Times New Roman, Times, serif"
    },
    {
        name: "Times New Roman",
        css: "'Times New Roman', Times, serif",
        label: "Times New Roman, Times, serif"
    },
    {
        name: "Courier New",
        css: "'Courier New', Courier, monospace",
        label: "Courier New, Courier, monospace"
    },
    {
        name: "Monaco",
        css: "Monaco, 'Consolas', 'Lucida Console', monospace",
        label: "Monaco, Consolas, Lucida Console, monospace"
    },
    {
        name: "Comic Sans MS",
        css: "'Comic Sans MS', 'Comic Sans', cursive, sans-serif",
        label: "Comic Sans MS, Comic Sans, cursive, sans-serif"
    },
    {
        name: "Verdana",
        css: "Verdana, Geneva, sans-serif",
        label: "Verdana, Geneva, sans-serif"
    },
    {
        name: "Trebuchet MS",
        css: "'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif",
        label: "Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Tahoma, sans-serif"
    },
    {
        name: "Palatino",
        css: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
        label: "Palatino Linotype, Book Antiqua, Palatino, serif"
    },
    {
        name: "Fira Mono",
        css: "'Fira Mono', 'Consolas', 'Menlo', 'Monaco', monospace",
        label: "Fira Mono, Consolas, Menlo, Monaco, monospace"
    }
];

const select = document.getElementById('font-stack-select');
const demoArea = document.getElementById('demo-area');
const fontCssCode = document.getElementById('font-css-code');

// Populate select options
fontStacks.forEach((stack, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = stack.name + ' — ' + stack.label;
    select.appendChild(opt);
});

// Default to first stack
function updateFontStack(idx = 0) {
    const stack = fontStacks[idx];
    demoArea.style.fontFamily = stack.css;
    fontCssCode.textContent = `font-family: ${stack.css};`;
}

select.addEventListener('change', (e) => {
    updateFontStack(e.target.value);
});

// Initialize
updateFontStack(0);
