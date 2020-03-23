# pug2pdf

##### This is unofficial library to generate a PDF from a Pug file using npm packages pug and pdfshift. (_Options Support will be added soon_).

### Set-up:

Download the NPM module
```
npm install pug2pdf --save
```

## USAGE GUIDE

### INITIALISE

Initialize with your [PDF Shift](https://pdfshift.io) auth key
```javascript
const pug2pdf = require('pug2pdf')('XXXXXXXXXXXXXXXXXXX');
```
That's all, you are ready to use PDF Shift service!

### Usage

You can now use the object to convert a pug file to a pdf. Simply pass the absolute path of the pug file with the data and options (not required)
```javascript
pug2pdf( {

    pugPath: 'template.pug',

    data: { name: 'foo', address: 'bar'}

    options: {} // support coming soon

} );
```
pugPath can also contain a URL
```javascript
pug2pdf( {

    pugPath: 'http://foobar.com/template.pug',

    data: { name: 'foo', address: 'bar'}

    options: {} // support coming soon

} );
```

### Licence: (MIT License)

**Copyright (c) 2020 Nikhil Gurnani**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.