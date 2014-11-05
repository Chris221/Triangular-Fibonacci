function triangular(x) {
	var r = 0;
	if (x == 1) {
		r = 1;
	} else {
			var r = (x*(x+1))/2;
	}
	return r;
};

function tri() {
	var input = document.getElementById('tri_field');
	var inputStr = input.value;
	var inputArr = inputStr.split(' ');
	var location = document.getElementById('tri_output');
	var text = triangular(parseInt(inputArr[0]));
	output(location, text);
};

function fibonacci(x) {
	var q = 0;
	var w = 1;
	var t;
	var r = 1;
	if (x === 0) {
		t = 0;
	} else if (x === 1) {
		t = 1;
	} else {
		for (var i = 1; i < x; i++) {
			t = w + q;
			if (r%2 === 1) {
				q = t;
			} else {
				w = t;
			}
			r++;
		}
	}
	return t;
};

function fib() {
	var input = document.getElementById('fib_field');
	var inputStr = input.value;
	var inputArr = inputStr.split(' ');
	var location = document.getElementById('fib_output');
	var text = fibonacci(parseInt(inputArr[0]));
	output(location, text);
};


function output(field, text) {
	field.innerHTML = text;
};

document.getElementById('tri_submit').onClick = tri;
document.getElementById('fib_submit').onClick = fib;