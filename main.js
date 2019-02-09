var cc;
function makeCounter() {
    var count = 1;

    return function() {
        return count++;
    };
}
var fnCount =makeCounter();
function throughOnce(fn) {
    fn={
        get: function (cc) {
            if(cc%2!=0){
                return fn;
            }else return;
        },
        set: function () {
            var cc=fnCount();
        }
    };
return fn;
}



var logTroughOnce = throughOnce(function (text) {

    console.log(text);

});

logTroughOnce("Hello world!");
logTroughOnce("Hello world!");
logTroughOnce("Hello world!");
logTroughOnce("Hello world!");
logTroughOnce("Hello world!");


