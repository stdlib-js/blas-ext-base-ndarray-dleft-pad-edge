/** @license Apache-2.0 */

'use strict';

/**
* Prepend elements to a one-dimensional double-precision floating-point input ndarray by repeating the leading edge element and write the results to a one-dimensional double-precision floating-point output ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-dleft-pad-edge
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var dleftPadEdge = require( '@stdlib/blas-ext-base-ndarray-dleft-pad-edge' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float64Vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var k = scalar2ndarray( 6, {
*     'dtype': 'generic'
* });
*
* var z = dleftPadEdge( [ x, y, k ] );
* // returns <ndarray>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 3.0, 4.0 ]
*
* var bool = ( z === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
