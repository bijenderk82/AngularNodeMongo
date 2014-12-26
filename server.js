
var application_root = __dirname;
var express = require('express');
var path = require('path');							// create our app w/ express
var mongoose = require('mongoose');
var http = require('http');


var app = express();
//mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu'); 	// connect to mongoDB database on modulus.io



app.set('port', process.env.PORT || 3003);
app.use(express.static(__dirname + '/Public')); 		// set the static files location /public/img will be /img for users
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//app.use(app.router);

//app.use(express.static(path.join(__dirname, 'Public')));


//mongoose.connect('mongodb://localhost:27017/todo_db');

//var todosch = new mongoose.Schema({
//    text:String
//});

//var todo = mongoose.model('todo', todosch);

//app.get('/api/todos/', function (req, res) {
//   // debugger;
//    todo.find(function (err, todos) {
//        if (err)
//            res.send(err);
//        res.send(todos);
//    });
//});

//app.post('/api/todos/', function (req, res) {
//    //debugger;
//    todo.create({
//        text: req.body.text,
//        done: false
//    }, function (err, todos) {
//        if (err)
//            res.send(err);
//        todo.find(function (err, todos) {
//            if (err)
//                res.send(err);
//            res.send(todos);
//        })

//    }

//   )
//});

//app.delete('/api/todos/:todo_id', function (req, res) {
//   debugger;
//    todo.remove({ _id: req.params.todo_id }, function (err, todo1) {
//        if (err)
//            res.send(err);
//        todo.find(function (err, todos) {
//            if (err)
//                res.send(err);
//            res.send(todos);
//        });
//    })
//});

//app.get('*', function (req, res) {
//    res.sendfile('./Public/Index.html'); // load the single view file (angular will handle the page changes on the front-end)
//});

// listen (start app with node server.js) ======================================
//app.listen(3001);
//console.log("App listening on port 3001");

mongoose.connect('mongodb://localhost:27017/CapitalOne');


// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// employees
var employeesch = new mongoose.Schema({
    EmployeeID: Number,
    LastName: String,
    FirstName: String,
    Title: String,
    TitleOfCourtesy: String,
    BirthDate: Date,
    HireDate: Date,
    Address: String
});

var employee = mongoose.model('employee', employeesch);

app.get('/api/employees', function (req, res) {
    employee.find(function (err, employees) {
        if (err)
            res.send(err);
        res.send(employees);
    });
});

//customers
var customersch = new mongoose.Schema({
    CustomerID: String,
    CompanyName: String,
    ContactName: String,
    ContactTitle: String,
    City: String,
    Region: String,
    PostalCode: String,
    Country: String,
    Phone: String,
    Fax: String,
    Address: String
});

var customer = mongoose.model('customer', customersch);

app.get('/api/customers', function (req, res) {
    customer.find(function (err, customers) {
        if (err)
            res.send(err);
        res.send(customers);
    });
});

//Categories
var categorysch = new mongoose.Schema({
    CategoryID: Number,
    CategoryName: String,
    Description: String,
    Picture: String,
    field4: String,
    field5: String,
    field6: String
});

var category = mongoose.model('category', categorysch);

app.get('/api/categories', function (req, res) {
    category.find(function (err, categories) {
        if (err)
            res.send(err);
        res.send(categories);
    });
});


//Orders
var ordersch = new mongoose.Schema({
    OrderID: Number,
    CustomerID: String,
    EmployeeID: Number,
    OrderDate: Date,
    RequiredDate: Date,
    ShippedDate: Date,
    ShipVia: Number,
    Freight: Number,
    ShipName: String,
    ShipAddress: String,
    ShipCity: String,
    ShipRegion: String,
    ShipPostalCode: Number,
    ShipCountry: String
});

var order = mongoose.model('order', ordersch);

app.get('/api/orders', function (req, res) {
    order.find(function (err, orders) {
        if (err)
            res.send(err);
        res.send(orders);
    });
});

//Products
var productsch = new mongoose.Schema({
    ProductID: Number,
    ProductName: String,
    SupplierID: Number,
    CategoryID: Number,
    QuantityPerUnit: String,
    UnitPrice: Date,
    UnitsInStock: Number,
    UnitsOnOrder: Number,
    ReorderLevel: Number,
    Discontinued: Number
});

var product = mongoose.model('product', productsch);

app.get('/api/products', function (req, res) {
    product.find(function (err, products) {
        if (err)
            res.send(err);
        res.send(products);
    });
});

//Regions
var regionsch = new mongoose.Schema({
    RegionID: Number,
    RegionDescription: String
});

var region = mongoose.model('region', regionsch);

app.get('/api/regions', function (req, res) {
    region.find(function (err, regions) {
        if (err)
            res.send(err);
        res.send(regions);
    });
});

//shippers
var shippersch = new mongoose.Schema({
    ShipperID: Number,
    CompanyName: String,
    Phone: String
});

var shipper = mongoose.model('shipper', shippersch);

app.get('/api/shippers', function (req, res) {
    shipper.find(function (err, shippers) {
        if (err)
            res.send(err);
        res.send(shippers);
    });
});

//suppliers
var suppliersch = new mongoose.Schema({
    SupplierID: Number,
    CompanyName: String,
    ContactName: String,
    ContactTitle: String,
    Address: String,
    City: String,
    Region: String,
    PostalCode: String,
    Country: String,
    Phone: String,
    Fax: String,
    HomePage: String
});

var supplier = mongoose.model('supplier', suppliersch);

app.get('/api/suppliers', function (req, res) {
    supplier.find(function (err, suppliers) {
        if (err)
            res.send(err);
        res.send(suppliers);
    });
});

//territories
var territorysch = new mongoose.Schema({
    TerritoryID: Number,
    TerritoryDescription: String,
    RegionID: Number
});

var territory = mongoose.model('territory', territorysch);

app.get('/api/territories', function (req, res) {
    territory.find(function (err, territories) {
        if (err)
            res.send(err);
        res.send(territories);
    });
});

//zips
var zipsch = new mongoose.Schema({
    city: String,
    loc: String,
    pop: Number,
    state: String
});

var zip = mongoose.model('zip', zipsch);

app.get('/api/zips', function (req, res) {
    zip.find(function (err, zips) {
        if (err)
            res.send(err);
        res.send(zips);
    });
});



app.get('/api/customers/:customerid', function (req, res) {
    order.find({ CustomerID: req.params.customerid }, function (err, customers) {
            if (err)
                res.send(err);
            res.send(customers);
            //todo.find(function (err, todos) {
            //    if (err)
            //        res.send(err);
            //    res.send(todos);
            //});
        })
    });

app.get('*', function (req, res) {
    res.sendfile('./Public/Index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

console.log("this is node");