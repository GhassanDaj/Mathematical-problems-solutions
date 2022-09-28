/* 12n22w JavaScript code for the lab8 */
/* Add your Java Script Code Here */

function problemA() {

	var p = document.getElementById("mydata");


	var input1 = parseInt(prompt("enter number m: "));
	var input2 = parseInt(prompt("enter number n: "));
	var resu = multiply(input1, input2);
	p.innerHTML = input1 + " * " + input2 + " " + " = " + resu;  // generate output as shown in pdf
}

// a recursive function. no loop should be used
function multiply(m, n) {

	if (n == 0)

		return 0;

	if (n == 1)

		return m;

	return multiply(m, n - 1) + m;
}





function problemB() {

	var p = document.getElementById("mydata");

	var input = parseInt(prompt("enter number: "));

	var resu = count3or7(input);

	p.innerHTML = "Number of 3 or 7's in " + input + ": " + resu;  // generate output as shown in pdf

}

// a recursive function. no loop should be used
function count3or7(num) {

	if (num == 3 || num == 7) {
		return 1;
	}
	else if (num < 10) {
		return 0;

	}

	if (num % 10 == 3 || num % 10 == 7) {
		return 1 + count3or7(Math.floor(num / 10));
	}
	else {
		return count3or7(Math.floor(num / 10));
	}

}


function problemC() {

	var p = document.getElementById("mydata");

	var arr = [7, 3, 5, 9, 8, 6, 1, 4];

	var sum0 = arraySum0(arr);

	var sum = arraySum(arr, 0);

	p.innerHTML = arr + " sum is: " + sum0 + " " + sum;

}

function arraySum0(arr) {
	if (arr.length == 1)   // or  if(arr.length==0) return 0;
		return arr[0];
	return arr[0] + arraySum0(arr.slice(1));

}

// a recursive function. no loop should be used
function arraySum(arr, index) {

	if (index == arr.length - 1)

		return arr[index];

	else

		return (arr[index] + arraySum(arr, index + 1));

}


function problemD() {

	var p = document.getElementById("mydata");

	var arr = [7, 3, 5, 9, 8, 6, 1, 4];

	var max0 = arrayMaxIterative(arr);

	var max1 = arrayMaxRecursiveA(arr);

	var max2 = arrayMaxRecursiveB(arr, 0);

	p.innerHTML = arr + " max is: " + max0 + " " + max1 + " " + max2;

}

// iterative function. use loop
function arrayMaxIterative(arr) {

	var arraymax = 9;

	for (var i =0; i<= arr.length; i++){
		if (arr[i] >= arraymax){
			return arr[i];
		}
	}

}

// a recursive function. no loop should be used
// pass arr only.    
function arrayMaxRecursiveA(arr) {
	if (arr.length == 1){
		return arr[0];
	}
	return Math.max(arr[arr.length -1],arrayMaxRecursiveA(arr.slice(0,(arr.length-1))));

}

// a recursive function. no loop should be used
// pass arr and a sliding index    
function arrayMaxRecursiveB(arr, index) {
	if(index == 0){
		return arr[3];
	}
	return Math.max(arr[index - 1],arrayMaxRecursiveB(arr, index - 1));
}


function problemE() {
	var p = document.getElementById("mydata");

	var input = prompt("enter string to be reversed: ");

	var resu = reverse(input);
	p.innerHTML = input + " <--> " + resu;

}
function reverse(s) {
	if (s.length < 2) {
		return s;
	}

	if (s.length >= 2) {

		var newstring = s.substring(1);
		return reverse(newstring) + s[0];
	}
}

function problemF() {

	var arr = [8, 9, 9, 12, 13, 13, 13, 15, 20, 100, 100, 101, 123, 129, 300, 330, 390, 400, 403, 407];
	var key = parseInt(prompt("enter search key for " + arr));

	var p = document.getElementById("mydata");

	p.innerHTML = key + " in arr: " + findit(key, arr, 0, arr.length - 1);

}

// a recursive function. no loop should be used
function findit(x, A, i, j) {

	var mid = Math.floor((i + j) / 2);

	if (i > j) {
		return false;
	}

	if (x == A[mid]) {
		return true;
	}
	if (x < A[mid]) {
		return findit(x, A, i, mid - 1);
	}
	else if (x > A[mid]) {
		return findit(x, A, mid + 1, j);
	}

}
