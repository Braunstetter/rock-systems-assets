const helper = require("../helper/utils");

module.exports = (mixin, size) => {
    return !!helper.getSvgSpacingSizeBySizeString(size) ? {'> svg': helper.getSvgStyleset(size)} : null
}