<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# nonEnumerablePropertySymbols

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's own non-enumerable symbol properties.



<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
import nonEnumerablePropertySymbols from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nonenumerable-property-symbols@deno/mod.js';
```

#### nonEnumerablePropertySymbols( obj )

Returns an `array` of an object's own non-enumerable symbol properties.

<!-- eslint-disable id-length -->

```javascript
import hasSymbolSupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@deno/mod.js';
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@deno/mod.js';
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@deno/mod.js';

var obj = {};

if ( hasSymbolSupport() ) {
    defineProperty( obj, Symbol( 'a' ), {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
}

var symbols = nonEnumerablePropertySymbols( obj );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@deno/mod.js';
import hasSymbolSupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@deno/mod.js';
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@deno/mod.js';
import nonEnumerablePropertySymbols from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nonenumerable-property-symbols@deno/mod.js';

var hasSymbols = hasSymbolSupport();
var symbols;
var obj;

function Foo() {
    if ( hasSymbols ) {
        defineProperty( this, Symbol( 'baz' ), {
            'configurable': false,
            'enumerable': false,
            'writable': true,
            'value': 'qux'
        });
    }
    return this;
}

if ( hasSymbols ) {
    defineProperty( Foo.prototype, Symbol( 'bip' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'bop'
    });
}

obj = new Foo();
symbols = nonEnumerablePropertySymbols( obj );

console.log( symbols );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-enumerable-property-symbols`][@stdlib/utils/enumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-nonenumerable-property-symbols`][@stdlib/utils/inherited-nonenumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils-nonenumerable-property-names`][@stdlib/utils/nonenumerable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils-nonenumerable-property-symbols-in`][@stdlib/utils/nonenumerable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils-property-symbols`][@stdlib/utils/property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-nonenumerable-property-symbols.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-nonenumerable-property-symbols

[test-image]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-nonenumerable-property-symbols/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-nonenumerable-property-symbols?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-nonenumerable-property-symbols.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-nonenumerable-property-symbols/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-nonenumerable-property-symbols/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/enumerable-property-symbols]: https://github.com/stdlib-js/utils-enumerable-property-symbols/tree/deno

[@stdlib/utils/inherited-nonenumerable-property-symbols]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-symbols/tree/deno

[@stdlib/utils/nonenumerable-property-names]: https://github.com/stdlib-js/utils-nonenumerable-property-names/tree/deno

[@stdlib/utils/nonenumerable-property-symbols-in]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols-in/tree/deno

[@stdlib/utils/property-symbols]: https://github.com/stdlib-js/utils-property-symbols/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
