const template = `
<div class="component-a">
    <div class="title">Component A</div>
    <p class="body">
        Instance of Component A
    </p>
</div>
`;

export class ComponentA {
    private selector = 'component-a';
    private element: Element;
    private styles = require('./style.less?raw');

    constructor (querySelector) {
        this.element = document.querySelector(querySelector);

        if (!this.element) {
            throw new Error(`Could not find element with selector ${querySelector}`);
        }
    }

    render() {
        if (!document.querySelector('.' + this.selector)) {
            let head = document.head,
            style = document.createElement('style');

            style.id = 'component-a';
            style.type = 'text/css';
            style.appendChild(document.createTextNode(this.styles.default));
            head.appendChild(style);
            this.styles.default;
        }

        this.element.innerHTML = template;
    }
}