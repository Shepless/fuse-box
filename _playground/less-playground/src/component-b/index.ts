const template = `
<div class="component-b">
    <div class="title">Component B</div>
    <p class="body">
        Instance of Component B

        <div class="cat-with-hat"></div>
    </p>
</div>
`;

export class ComponentB {
    private selector = 'component-b';
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

            style.id = 'component-b';
            style.type = 'text/css';
            style.appendChild(document.createTextNode(this.styles.default));
            head.appendChild(style);
            this.styles.default;
        }

        this.element.innerHTML = template;
    }
}