import React from 'react';
import clsx from 'clsx';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useState, useEffect} from 'react';
import axios from 'axios'; 
import CheckCircle from '@material-ui/icons/CheckCircle';
const tableIcons = {
            Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
            Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
            DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
            Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
            Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
            Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
            FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
            LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
            NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
            PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
            ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
            SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
            ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
            ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
          };          
            
function Viewapproval(){    
  const [state, setState] = React.useState({
    columns: [
      { title: 'Title', field: 'name' },
      { title: 'Starting Price', field: 'price', type: 'numeric' },
      { title: 'Description', field: 'description' },
     // { title: 'Category', field: 'category' },
      { title: 'Seller Name', field: 'sname' },
      { title: 'Location', field: 'adress' },
      { title: 'AuctionType', field: 'auctiontype' }
      
    ],
    //data: [],
  });

  const[data,setdata] = React.useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3003/product/viewproduct/find')
    .then(res=>{
      console.log(res)
      //var i;
      //for(i = 0; i<res.data.length ; i++){
        setdata(res.data)
      //}
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return(

            <div>
<MaterialTable

      icons={tableIcons}
      title="Approvals"
      columns={state.columns}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
          fontWeight: 'bold',
        }
      }}
      data={data}
      style={{
        width: "100%",
      }}
     actions={[
       {
       icon: ()=> <CheckCircle />,
       tooltip: 'Approve Session',
       onClick: (event, rowData) =>  { alert("Approved")
      //  var datacomplete = [];
      //  datacomplete = JSON.stringify(rowData);
      //  console.log(datacomplete[2]);
      console.log(rowData);
          
     // console.log(JSON.parse(rowData));
      }
       }
     
    ]
     }
//      editable={{
       
        // onRowUpdate: (newData, oldData) =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       if (oldData) {
        //         setState(prevState => {
        //           const data = [...prevState.data];
        //           data[data.indexOf(oldData)] = newData;
        //           return { ...prevState, data };
        //         });
        //       }
        //     }, 600);
        //   }),
    //     onRowDelete: oldData =>
    //       new Promise(resolve => {
    //         setTimeout(() => {
    //           resolve();
    //           setState(prevState => {
    //             const data = [...prevState.data];
    //             data.splice(data.indexOf(oldData), 1);
    //             return { ...prevState, data };
    //           });
    //         }, 600);
    //       }),
    //   }}
    /> 
    </div>           
        );
    }

export default Viewapproval;