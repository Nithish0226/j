var express = require('express');
var router = express.Router();
const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "nithish", // update me
      password: "Nithi@123" // update me
    },
    type: "default"
  },
  server: "nithish-sql-server.database.windows.net", // update me
  options: {
    database: "nithish-sql", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } 
});

connection.connect(function(err) {
    if (err) throw err;
    else{
        console.log("Azure MySQL Conneted.")
    }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/customer',function(req,res){
var cl =[]
var a=[]
  // Read all rows from table
  const request = new Request(
    `select * from customer`,
    (err, rowCount,result) => {
      if (err) {
        console.error(err.message);
      } else {
        //console.log(`${rowCount} row(s) returned`);
        res.send(cl)
      }
    }
  );

  request.on("row", columns => {
    a=[{id:"",firstName:"",lastName:"",DOB:"",address:"",city:"",state:"",zip:""}]
    columns.forEach(column => {
      //console.log("%s\t%s", column.metadata.colName, column.value);
      if(column.metadata.colName=="customerID"){
        a[0].id=column.value
    }
    if(column.metadata.colName=="customerFName"){
        a[0].firstName=column.value
    }
    if(column.metadata.colName=="customerLName"){
        a[0].lastName=column.value
    }
    if(column.metadata.colName=="DOB"){
        a[0].DOB=column.value
    }
    if(column.metadata.colName=="address"){
        a[0].address=column.value
    }
    if(column.metadata.colName=="city"){
        a[0].city=column.value
    }
    if(column.metadata.colName=="state"){
        a[0].state=column.value
    }
    if(column.metadata.colName=="zip"){
        a[0].zip=column.value
    }
    });
    cl.push(a[0]);
   //res.send(a)
  });

  connection.execSql(request);
});
router.post('/order',function(req,res){

  var cl =[]
  var a=[]
    // Read all rows from table
    const request = new Request(
      `select * from orders`,
      (err, rowCount,result) => {
        if (err) {
          console.error(err.message);
        } else {
          //console.log(`${rowCount} row(s) returned`);
          res.send(cl)
        }
      }
    );
  
    request.on("row", columns => {
      a=[{id:"",productDetails:"",SKU:"",cost:"",quantity:"",totalAmount:"",customerID:""}]
      columns.forEach(column => {
        //console.log("%s\t%s", column.metadata.colName, column.value);
        if(column.metadata.colName=="orderID"){
          a[0].id=column.value
      }
      if(column.metadata.colName=="productDetails"){
          a[0].productDetails=column.value
      }
      if(column.metadata.colName=="SKU"){
          a[0].SKU=column.value
      }
      if(column.metadata.colName=="cost"){
          a[0].cost=column.value
      }
      if(column.metadata.colName=="quantity"){
          a[0].quantity=column.value
      }
      if(column.metadata.colName=="totalAmount"){
          a[0].totalAmount=column.value
      }
      if(column.metadata.colName=="customerID"){
          a[0].customerID=column.value
      }
      });
      if(a[0].customerID===req.body.id){
      cl.push(a[0]);
      }
    });
  
    connection.execSql(request);
  });
module.exports = router;
