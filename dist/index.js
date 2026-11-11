"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=s(function(m,v){
var q=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),t=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),f=require('@stdlib/blas-ext-base-dleft-pad-edge/dist').ndarray;function g(a){var r=a[0],e=a[1],d=c(a[2]);return f(q(r,0),d,u(r),i(r,0),t(r),u(e),i(e,0),t(e)),e}v.exports=g
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
