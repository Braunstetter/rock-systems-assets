const helper = require('./../helper/utils')

module.exports = (mixin, size) => {
    return !!helper.getSvgSpacingSizeBySizeString(size) ? {'&': helper.getSvgStyleset(size)} : null
}