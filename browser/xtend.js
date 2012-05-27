/* 
 * xtend.js  -  Extend like a boss (Browser version)
 *
 * 
 * The following ES5 features are required by this library:
 *
 * - Object.keys 
 *   https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
 */
(function (o) {
    var slice = Array.prototype.slice;

    o.extend = extend;

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
}(window));     // Replace window with your preferred token
