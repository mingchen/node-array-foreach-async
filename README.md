array-foreach-async
===================

Add forEachAsync() async/await to Array to support async functions.

## Install

    npm install array-foreach-async


## API

    /**
     * @param {function} callback function(val, idx, obj)
     */
    Array.prototype.forEachAsync(callback)

## Usage

    require('array-foreach-async');

    await someArray.forEachAsync(async (item) => {
        ...
        await someAsyncFunction();
        ...
    });


## References

* [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill)
* [JavaScript: async/await with forEach()](https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404)
