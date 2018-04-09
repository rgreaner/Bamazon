var mysql = require("mysql");
var inquirer = require('inquirer');
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
    console.log("connected as id " + connection.threadId);
    displayMenu();
});

function displayMenu() {
    {
        inquirer.prompt([/* Pass your questions in here */
            {
                type: "list",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
                name: "menuItem",
                message: "Please select an action.",
            },
        ]).then(function (managerAnswer) {
            //If a manager selects View Products for Sale, 
            if (managerAnswer.choices === [0]) {
                connection.query ("SELECT * FROM products"), function (err, read_data) {
                    if (err) throw err;
                    console.log(read_data);
            }}
            connection.end();
            //the app should list every available item: 
            //the item IDs, names, prices, and quantities.

            //If a manager selects View Low Inventory
            //then it should list all items with an inventory count lower than five.
            //If a manager selects Add to Inventory
            //your app should display a prompt that will let the manager "add more" of any item currently in the store.
            //If a manager selects Add New Product
            //it should allow the manager to add a completely new product to the store.


            // connection.query("SELECT price FROM products WHERE id = ?", answer.chooseProduct, function (err, selectedRes) {
            //     if (err) throw err;
            //     console.log("You owe: $" + (answer.quantityProduct * answer.chooseProduct.price));
            //     connection.query("UPDATE bamazondb.products SET stock_quantity= stock_quantity - " + answer.quantityProduct + " WHERE id=?", [answer.chooseProduct], function (err, updatedRes) {
            //         if (err) throw err;
            //         console.log(updatedRes);
            //     })
            //     connection.end();
            // });
        })
    }
  
}

// function readData() {
//     connection.query ("SELECT * FROM products"), function (err, read_data) {
//         if (err) throw err;
//         console.log(read_data);
//     }
// }
