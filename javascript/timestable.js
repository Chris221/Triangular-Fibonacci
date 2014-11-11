function start() {
	var input = document.getElementById('in');
	var inputStr = input.value;
	var inputArr = inputStr.split(' ');
	var number = (parseInt(inputArr[0]));
	var product = products(number);
	var tableArray = buildArray(number, product);
	var location = document.getElementById('output');
	location.appendChild(buildTable(tableArray));
};

function products(x) {
	var products = [];
	for (var i = 0; i < 11; i++) {
		products.push(x*i);
	}
	return products;
};

function buildArray(n, x) {
	var t = [];
	for (var i = 0; i < x.length; i++) {
		var r = (n + ' x ' + i + ' = ' + x[i]).toString();
		t.push( {Table:r} );
	}
	console.log(t);
	return t;
};
///**
function buildTable(data) {
	var table = document.createElement("table");

	var fields = Object.keys(data[0]);
	var headRow = document.createElement("tr");
	table.appendChild(headRow);

	fields.forEach(function(field) {
		var headCell = document.createElement("th");
		headCell.textContent = field;
		headRow.appendChild(headCell);
	});

	data.forEach(function(object) {
		var row = document.createElement("tr");
		fields.forEach(function(field) {
			var cell = document.createElement("td");
			cell.textContent = object[field];
			if (typeof object[field] == "number")
				cell.style.textAlign = "right";
			row.appendChild(cell);
		});
		table.appendChild(row);
	});
	
	return table;
};
//*/