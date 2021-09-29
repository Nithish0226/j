import React from "react";
import Table1 from "./Table2border";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Table1border from './Table1border';
import Table2border from "./Table2border";
const commonStyles = {
  m: 1,
  border: '3px solid'
};

export default function App(){
  return(<div>
   <Paper variant="outlined" ><Table1border/></Paper>
   <Paper variant="outlined"><Table2border/></Paper>
</div>
  )
}
