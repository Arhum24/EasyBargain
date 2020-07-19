import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './title';

// Generate Order Data
function createData(id, date, name, shipTo, amount) {
  return { id, date, name, shipTo, amount };
}

const rows = [
  createData(0, '16 Nov, 2019', 'Shirt', 'Asad Rauf', 312.44),
  createData(1, '17 Sept, 2019', 'Jeans', 'Umair Akram', 866.99),
  createData(2, '21 Aug, 2019', 'Blender', 'Farhan Ahmed', 100.81),
  createData(3, '22 Jul, 2019', 'Glasses', 'Umer Sayeed', 654.39),
  createData(4, '20 Jun, 2019', 'Microwave Oven','Kashif Ahmed', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Winninghistory() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Winning History</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Seller Name</TableCell>
            <TableCell align="right">Winning Bid Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} id="box">
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}