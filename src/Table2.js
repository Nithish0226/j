import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
const columns = [
  { field: 'id', headerName: 'Order ID', width: 150 ,headerClassName: 'super-app-theme--header',},
  {
    field: 'productDetails',
    headerName: 'Product Details',
    width: 580,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'SKU',
    headerName: 'SKU',
    width: 110,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'cost',
    headerName: 'Cost',
    width: 150,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 150,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'totalAmount',
    headerName: 'Total Amount',
    width: 183,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
];

var r1=[];
const r=[
    { id: 1, firstName: 'Snow',lastName: 'Jon', DOB: '35',address:"redhills",city:"chennai",state:"tn",zip:"60052" },
];
const useStyles = makeStyles({
  root: {
    '& .super-app-theme--header': {
      backgroundColor: 'rgba(121, 103, 255, 1)',
      color:'#ffffff',
      fontWeight: '1200',
    },
  },
});
export default function Table2() {
        const[rows,setRows]=React.useState([]);
        const[id,setId]=React.useState("");

        const classes = useStyles();
React.useEffect(()=>{

  axios.post("https://nithish-sql-server.azurewebsites.net/order",{id:localStorage.getItem("id")}).then(res=>{
    setRows(res.data)
    //localStorage.setItem("order",res.data);
    });
})
React.useEffect(()=>{
setId(localStorage.getItem("id"))
console.log(localStorage.getItem("id"))

})
  return (<div>
       <div style={{ height: 400, width: '100%' }} className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        onRowClick={((e)=>{
          console.log(e.id)
        })}
      />
    </div>
    </div>
  );
}
