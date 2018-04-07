/**
 *  const objs = [...];
 *  await objs.forEachAsync(async (item) => {
 *      ...
 *      await someAsyncFunction();
 *      ...
 *  });
 *
 * @param {function} callback function(val, idx, obj)
 */

if (!Array.prototype.forEachAsync) {
    Array.prototype.forEachAsync = async function(callback) {
        for (let index = 0; index < this.length; index++) {
            await callback(this[index], index, this);
        }
    };
}
