/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var defineProperty = require( '@stdlib/utils-define-property' );
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );
var nonEnumerablePropertySymbols = require( './../lib' ); // eslint-disable-line id-length

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
