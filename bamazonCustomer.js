var mysql = require("mysql");
var inquirer = require('inquirer');
const cTable = require('console.table');
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazondb"
});

connection.connect(function (err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId);
    displayInfo();
});


function displayInfo() {
    console.log("Selecting all  products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        chooseProduct();
    })
}

function chooseProduct() {
    inquirer.prompt([/* Pass your questions in here */
        { //The first should ask them the ID of the product they would like to buy.
            type: "input",
            name: "chooseProduct",
            message: "Which product would you like to buy? Please choose the ID number.",
        },
        { //The second message should ask how many units of the product they would like to buy
            type: "input",
            name: "quantityProduct",
            message: "How many units would you like to purchase? Please enter a number.",
        }
    ]).then(function (answer) {
        //take in product
        //console.log(answer.chooseProduct);
        compareQuant(answer);
    });
}

function compareQuant(answer) {
    connection.query("SELECT * FROM products WHERE id = ?", answer.chooseProduct, function (err, selectedRes) {
        var customerQuant = answer.quantityProduct;
        var stockQuant = selectedRes[0].stock_quantity;
        var totalPrice = customerQuant * selectedRes[0].price
        // console.log(customerQuant)
        // console.log(stockQuant)
        // console.log(totalPrice)

        if (err) throw err;
        //console.log(selectedRes);

        if (customerQuant <= stockQuant) {
            console.log("You owe: $" + totalPrice);

            connection.query("UPDATE bamazondb.products SET stock_quantity= stock_quantity - " + customerQuant + " WHERE id=?", [answer.chooseProduct], function (err, updatedRes) {
                if (err) throw err;

                //console.log(updatedRes);

            }
            )
        }
        else {
            console.log("Insufficient quantity!")
        }
        connection.end(function (err){
        });
    })

}


