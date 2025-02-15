
function delayfn(time) {
    return new Promise((resolve)=> setTimeout(resolve, time));
}

console.log(`promise lecture starts`);
delayfn(2000).then(()=> console.log(`after 2 seconds promise resolved`));
console.log(`end`);

function dividefn(num1, num2) {
    return new Promise((resolve, reject) => {
        if(num2 === 0) {
            reject(`cannot perform division by zero`);
        }
        else {
            resolve(num1/num2);
        }
    });
}

dividefn(10,0)
    .then(result => console.log(result, "res"))
    .catch(error => console.log(error, "err"));
