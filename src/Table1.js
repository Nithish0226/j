import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const columns = [
  { field: 'id', headerName: 'id', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'DOB',
    headerName: 'DOB',
    width: 110,
    editable: false,
  },
  {
    field: 'address',
    headerName: 'address',
    width: 150,
    editable: false,
  },
  {
    field: 'city',
    headerName: 'city',
    width: 110,
    editable: false,
  },
  {
    field: 'state',
    headerName: 'state',
    width: 110,
    editable: false,
  },
  {
    field: 'zip',
    headerName: 'ZIP CODE',
    width: 110,
    editable: false,
  },
];

var r1=[];
const r=[
    { id: "", firstName: '',lastName: '', DOB: '',address:"",city:"",state:"",zip:"" },
];

export default function Table3() {
        const[rows,setRows]=React.useState([{ id: "", firstName: '',lastName: '', DOB: '',address:"",city:"",state:"",zip:"" }]);
        const[order,setOrder]=React.useState([]);
        const[nextButDis,setNextButDis]=React.useState(true);
        const[preButDis,setPreButDis]=React.useState(true);
        const[page,setPage]=React.useState(0);   
       
React.useEffect(()=>{
  console.log("hai")
  //setPage(window.name)
  //alert(window.name)
    axios.get("https://nithish-sql-server.azurewebsites.net/customer").then(res=>{
        setRows(res.data)  
        let len=res.data
        let len1 =len.length
        if(len1>1 && page===0){
          setNextButDis(false)
        }   
        localStorage.setItem("id",len[0].id);

      });   
},[])
  return (<div>
    <div style={{ width: '100%',paddingLeft:50,paddingTop:75 }}>
      Customer ID : {rows[page].id}  &emsp;
      First Name : {rows[page].firstName} &emsp;
      Last Name : {rows[page].lastName}  &emsp;
      DOB : {rows[page].DOB}  &emsp; <br/>
      Address : {rows[page].address}  &emsp;
      City : {rows[page].city}  &emsp;
      State : {rows[page].state}  &emsp;
      ZipCode : {rows[page].zip}  &emsp;
    </div>
    <div>
    <Stack padding={5} justifyContent={"center"} spacing={2} direction="row">
    <Button variant="contained" disabled={preButDis} onClick={(()=>{
        setPage(page-1)
        var page1=page-1
        var len=rows.length
        if(page1===0){
          setPreButDis(true);
        }else{
          setPreButDis(false);
        }
        if(page1===len-1){
        setNextButDis(true)
        }else{
          setNextButDis(false)
        }
        localStorage.setItem("id",rows[page1].id);
        localStorage.setItem("clk","true");
        window.name=page1
        //window.location.reload(false);
      })}>Previous</Button><Button variant="contained" disabled={nextButDis} onClick={(()=>{
        setPage(page+1)
        var page1=page+1
        var len=rows.length
        if(page1===0){
          setPreButDis(true);
        }else{
          setPreButDis(false);
        }
        if(page1===len-1){
        setNextButDis(true)
        }else{
          setNextButDis(false)
        }
        localStorage.setItem("id",rows[page1].id);
        localStorage.setItem("clk","true");
        window.name=page1
        //window.location.reload(false);
      })}>Next</Button>
      </Stack>
    </div>
    </div>
  );
}
