
# Phenomenon-px

[![npm version](https://img.shields.io/npm/v/phenomenon-px.svg)](https://www.npmjs.com/package/phenomenon-px)
[![gzip size](http://img.badgesize.io/https://unpkg.com/phenomenon-px/dist/phenomenon.es.js?compression=gzip)](https://unpkg.com/phenomenon-px)
[![license](https://img.shields.io/npm/l/phenomenon-px.svg)](https://github.com/vaneenige/phenomenon-px/blob/master/LICENSE)
[![dependencies](https://img.shields.io/badge/dependencies-none-ff69b4.svg)](https://github.com/vaneenige/phenomenon-px/blob/master/package.json)


Phenomenon-px is the fastest way to create pixel shaders. With its simple API and small size all focus is on your code!

## Install

```
$ npm install --save phenomenon-px
```

## Usage

```js
// Import the library
import Phenomenon from 'phenomenon-px';

// Create the pixel shader
Phenomenon(fragment, uniforms, render, canvas);
```

## API

### Phenomenon(fragment, uniforms, render, canvas)

Creates a new instance of Phenomenon-px.

#### fragment
Type: `string` <br/>

The fragment shader that will be applied to all pixels on the canvas.

#### uniforms
Type: `Object`<br/>

An object with uniforms that can be used in the shader program.

#### render(uniforms)
Type: `function`<br/>

A function that is called on every frame that can be used to update uniforms.

#### canvas
Type: `HTMLElement` <br/>
Default: `document.querySelector('canvas')` <br/>

The canvas that will be used to render the shaders on.

## Contribute

Are you excited about this library and have interesting ideas on how to improve it? Contribute! 🙌

```
$ npm install; npm run demo;
```

## License

MIT © <a href="https://use-the-platform.com">Colin van Eenige</a>
