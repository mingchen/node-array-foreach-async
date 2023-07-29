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
    Array.prototype.forEachAsync = async function (callback) {
        await Promise.all(this.map((item, index) => {
            return callback(item, index, this);
        }));
    };
}
