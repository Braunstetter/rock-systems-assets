const _ = require("lodash")
const button = require("../styles/btn")

module.exports = (mixin, size, color) => {

    let styles = _.clone(button.default);

    styles = addStylesForSize(size, styles);
    styles = addStylesForColor(color, styles);

    return styles
}


function addStylesForSize(size = 'default', styles) {
    if (size === 'md') {
        styles = _.merge(styles, button.size.md)
    }
    return styles;
}

function addStylesForColor(color = 'default', styles) {

    if (color === 'primary') {
        styles = _.merge(styles, button.color.primary, button.border.default)
    }
    return styles;
}