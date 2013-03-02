module.exports = extend;

// old browsers suck, we deal with it and move on
var Keys = Object.keys || function(obj) {
    var keys = [];
    for (var k in obj) {
        keys.push(k);
    }
    return keys;
};

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i],
            keys = Keys(source);

        for (var j = 0; j < keys.length; j++) {
            var name = keys[j];
            target[name] = source[name];
        }
    }

    return target;
}
