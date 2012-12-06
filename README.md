# xtend

Extend like a boss

xtend is a basic utility library which allows you to extend an object by appending all of the properties from each object in a list. When there are identical properties, the right-most property takes presedence.

## Examples

Basic usage:
<a href="https://runnable.com/#raynos/xtend-basic/app.js/launch" target="_blank"><img src="https://runnable.com/external/styles/assets/runnablebtn.png" style="width:67px;height:25px;"></a>
    var extend = require('xtend'),
        a = {
            'I': 'am'
        },
        b = {
            'a': 'boss'
        };

    extend(a, b);

    console.log('I ', a.I, ' a ', a.a);
    
Extend with multiple objects:
<a href="https://runnable.com/#raynos/xtend-multiple/app.js/launch" target="_blank"><img src="https://runnable.com/external/styles/assets/runnablebtn.png" style="width:67px;height:25px;"></a>
    var extend = require('xtend'),
        a = {
            'w': 'I'
        },
        b = {
            'x': 'am'
        },
        c = {
            'y': 'a'
        },
        d = {
            'z': 'boss'
        }

        boss = extend({}, a, b, c, d);

    console.log(boss.w, ' ', boss.x, ' ', boss.y, ' ', boss.z);
    
Right-most precendence:
<a href="https://runnable.com/#raynos/xtend-rightmost/app.js/launch" target="_blank"><img src="https://runnable.com/external/styles/assets/runnablebtn.png" style="width:67px;height:25px;"></a>
    var extend = require("xtend"),
        a = {
            "p": 1
        },
        b = {
            "p": 2
        }
        c = {
            "p": 3
        },

        boss = extend({}, a, b, c);

    console.log(boss.p);  // Logs 3
    
## MIT Licenced