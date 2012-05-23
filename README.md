# xtend

extend like a boss

## Example

    var extend = require("xtend"),
        a = {
            "I": "am"
        },
        b = {
            "a": "boss"
        }

    var boss = extend({}, a, b)

    console.log("I ", boss.I, " a ", boss.a)