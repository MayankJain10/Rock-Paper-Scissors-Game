for(let i=1; i<=100; i++){
    let f = i % 3 == 0;
    let b = i % 5 == 0;

    // console.log(f ? (b ? 'FizzBuzz':'Fizz'): b ? 'buzz': i);
}   


function multiply(a){
    return function(b){
        return a * b;
    }
}

console.log(multiply(4)(5));


function modifyArray(arr, callback){
    arr.push(100);

    callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
    console.log("array has been modified", arr);
});

