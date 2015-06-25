/*===========================
CGGSwiper AMD Export
===========================*/
if (typeof(module) !== 'undefined')
{
    module.exports = window.CGGSwiper;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.CGGSwiper;
    });
}