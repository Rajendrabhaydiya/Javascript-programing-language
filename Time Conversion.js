function processData(input) {
    input = input.split(':');
    var hours = parseInt(input[0]);
    var timeFrame = input[2].slice(2);
    var seconds = input[2].slice(0,2);
    if ((timeFrame === 'PM') && (hours !== 12)) {
        hours += 12;
    }
    if ((hours === 12) && (timeFrame === 'AM')) {
        hours = '00';
    } else if (hours < 10) {
        hours = '0' + hours.toString();
    } else {
        hours = hours.toString();
    }
    console.log([hours, input[1], seconds].join(':'));
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
