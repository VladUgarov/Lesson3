Array.prototype.myFilter  = function (callback, thisArg) {
    if (this == null) {
        throw new Error("Cant iterate over undefined or null");
    }

    let context = this;

    let Obj = Object(this);

    if (arguments.length > 1) {
        context = thisArg;
    }

    if (typeof callback !== "function") {
        throw new Error("Callback is not a function");
    }

    let len = Obj.length;

    let res = [];

    for (let i = 0; i < len; i++) {
        if (i in Obj) {
            let current = this[i];
            if (callback.call(context, current, i, Obj)) {
                res.push(current);
            }
        }
    }

    return res;
};

function createDebounceFunction(fn,ms){
    let timeout;
    return function (){
        const fnCall = () => {fn.apply(this,arguments)}
        clearTimeout(timeout)
        timeout = setTimeout(fnCall,ms)
    }
}




