/* 
 * xtend.js  -  Extend like a boss
 *
 * 
 * The following ES5 features are required by this library:
 *
 * - Object.keys 
 *   https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
 */
 
var slice = Array.prototype.slice;

module.exports = extend;

function extend(target) {
    var sources, source, keys, name, i, j;

    sources = slice.call(arguments, 1);

    for (i = 0; i < sources.length; i += 1) {
        source = sources[i];
        keys = Object.keys(source);
        for (j = 0; j < keys.length; j += 1) {
            name = keys[j];
            target[name] = source[name];
        }
    }

    return target;
}