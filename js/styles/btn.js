const helper = require("../helper/utils");

module.exports = {
    default: {
        'z-index': 50,
        'cursor': 'pointer',
        'display': 'inline-flex',
        'justify-content': 'center',
        'align-items': 'center',
        'border-radius': '0.375rem',
        '&:focus': {
            'outline': 'none'
        }
    },
    size: {
        'md': {
            'padding': '0.5rem 1rem',
            '& > svg': helper.getSvgStyleset('md')
        }
    },
    color: {
        'primary': {
            'border-color': '$light_dark',
            'box-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            'background-color': '$dark',
            'color': 'white',
            'font-weight': '500',
            'transition-property': 'background-color',
            'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
            'transition-duration': '150ms'
        }
    },
    border: {
        default: {
            'border-style': 'solid',
            'border-width': '1px'
        }
    }
}