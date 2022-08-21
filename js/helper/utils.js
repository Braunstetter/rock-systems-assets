module.exports = {
    spaceBetween(direction, size) {
        const directionString = this.getDirectionByIdentifier(direction)

        if (directionString) {
            return {
                '> * + * ': {
                    ['margin-' + directionString]: '$_' + size
                }
            }
        }
    },
    getDirectionByIdentifier(identifier) {
        return identifier === 'x' ? 'left' : identifier === 'y' ? 'top' : undefined
    },
    getSvgSpacingSizeBySizeString(size) {
        if (size === 'md') {
            return '$_5'
        }

        return null;
    },
    getSvgStyleset(size) {
        const sizeString = this.getSvgSpacingSizeBySizeString(size)

        return {
            'flex-shrink': 1,
            'height': sizeString,
            'width': sizeString,
        }
    }
}