// module.export -> export
// require -> import

const firstModule = require('./first-module');

console.log(firstModule.add(10, 20));

try {

    console.log("trying to divide by zero");
    let result = firstModule.div(10, 5);
    console.log(result);

} catch (error) {

    console.log("caught an error", error.message);

}


// module wrapper
// (
//     function(exports, require, module, __filename, __dirname) {

//     }
// )
