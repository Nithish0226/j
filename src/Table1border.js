import * as React from 'react';
import Box from '@mui/material/Box';
import Table1 from './Table1';

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  border: '3px solid',
};

export default function BorderColor() {
  return (
      <Box sx={{ ...commonStyles, borderColor: 'primary.main' ,borderRadius: '16px'}} >
    <Table1/>
    </Box>
  );
}
