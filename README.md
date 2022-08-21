# Assets for the rock.systems ecosystem

Make sure every bundle uses consistent assets.

* [Installation](#installation)
* [CSS](#css)
  * [Mixins](#mixins)
    * [Utilities](#utilities)
      * [svg](#svg)
      * [contains-svg](#contains-svg)
      * [space](#space)
    * [Components](#components)
      * [Button](#button)
  * [Variables](#variables)
    * [Import Variables](#import-variables)

## Installation

```shell
yarn add braunstetter/rock
```

## CSS

We are using the [postcss-mixins](https://github.com/postcss/postcss-mixins) library.

### Mixins

To use our mixins you have to enable it first.

```js

// example configuration of postcss.config.js
const path = require("path");

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-mixins')({
            mixinsFiles: path.join(__dirname, '/node_modules/@braunstetter/rock/js/mixins', '**/*.js')
        }),
        require('postcss-simple-vars'),
        require('postcss-import'),
        require('postcss-nested'),
        require('cssnano')({
            preset: 'default',
        }),
    ]
}
```

Afterward you will be able to use the mixins:

```css
@mixin btn md;
```

#### Utilities

##### svg

Svg images are used quite often in modern UI components. So this utility mixin focuses on standardizing svg images.

```css
svg {
    @mixin svg md;
}
```

Available sizes:

**md**  
height: 1.25rem  
width: 1.25rem

##### contains-svg

This utility mixin mirrors the [svg mixin](#svg) - but you don't have to put it inside a `svg` css-selector.

```css
.my-container {
    @mixin contains-svg md;
}
```

##### space

This utility is controlling the space between child elements.

You can use all spacing [variables](#variables):

```css
/* 3 means it uses the $_3 variable */
@mixin space x, 3;
```

> be aware - additionally, variables have to be [imported](#import-variables) before you can use them.

#### Components

##### Button

```css
/* parameter: size, color */
@mixin btn md, primary;
```

Available sizes:
**md**

Available colors:
**primary**

If you are using this component **without** the color parameter, no styling will be applied except for the padding and
spacing of the `size` parameter:

```css
@mixin btn md;
```

### Variables

We are using the [`postcss-simple-vars`](https://github.com/postcss/postcss-simple-vars) plugin.

#### Import variables

Before you can use the variables, you have to import them first into your css document:

```css
/* all variables available */
@import "@braunstetter/rock/css/variables.css";

/* just a subset */
@import "@braunstetter/rock/css/variables/color.css";
```







