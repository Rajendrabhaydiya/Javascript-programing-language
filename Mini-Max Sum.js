function processData(input) {
    var v = input.split(' ');
    for (var i = 0; i < v.length; i++) {
        v[i] = parseInt(v[i])
    }
    var max = -Infinity;
    var min = Infinity;
    for (var i = 0; i < v.length; i++) {
        var sum = 0;
        for (var j = 0; j < v.length; j++) {
            if ( i != j ) {
                sum += v[j];
            }
        }
        if (sum < min) min = sum;
        if (sum > max) max = sum;
    }
    console.log(min, max)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
