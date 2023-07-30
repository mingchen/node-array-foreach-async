/**
 *  const objs = [...];
 *  await objs.forEachAsync(async (item) => {
 *      ...
 *      await someAsyncFunction();
 *      ...
 *  });
 *
 * @param {function} callback function(val, idx, obj)
 * @param {boolean} concurrent
 */

if (!Array.prototype.forEachAsync) {
    Array.prototype.forEachAsync = async function (callback, concurrent = false) {
        if (!!concurrent) {
            await Promise.all(this.map((item, index) => {
                return callback(item, index, this);
            }));
        } else {
            for (let index = 0; index < this.length; index++) {
                await callback(this[index], index, this);
            }
        }
    };
}
