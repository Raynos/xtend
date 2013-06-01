var isObject = require("is-object")

module.exports = extend

function extend(target) {
    var sources = [].slice.call(arguments, 1)

    sources.forEach(function (source) {
        if (!isObject(source)) {
            return
        }

        Object.keys(source).forEach(function (name) {
            target[name] = source[name]
        })
    })

    return target
}
