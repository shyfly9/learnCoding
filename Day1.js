// length of the longest substring without repeating characters
var s = "tmmzuxt";
var c = s.split("")
var x = []
var l = x.length
for (var i = 0; i < c.length; i++) {
    var y = []
    y.push(c[i])
    for (var j = i + 1; j < c.length; j++) {
        if (c[j].length > 0 && y.indexOf(c[j]) == -1) {
            y.push(c[j])
        }
        else {
            break;
        }
    }
    if (y.length > l) {
        l = y.length
    }
}
console.log(l)

