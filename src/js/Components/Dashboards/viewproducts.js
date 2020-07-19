import React from 'react';
import clsx from 'clsx';
import Dashboard from './sellerdashboard';
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
import Products from './products';
import AddProducts from './addproducts';
import {useState, useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios'; 
          
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
            
function ViewProducts(){    
  const [state, setState] = React.useState({
    columns: [
      { title: 'Bidding', field: 'bid' },
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

  let history = useHistory();
  const startBidding = (id) => {
    history.push("./Livesession/livemainsession.js?id="+id+"&view=seller");
  };

  useEffect(()=>{
    axios.get('http://localhost:3003/product/viewproduct')
    .then(res=>{
      console.log(res)
      //var i;
      //for(i = 0; i<res.data.length ; i++){
        res.data.forEach(element => {
          if(element.auctiontype==='Live Session Auction'){
            var btn1= <Button style={{backgroundColor:'#000',color:'#fff'}} onClick={startBidding.bind(this,element._id)}>Start</Button>;
            element.bid=btn1
          }
        });
        setdata(res.data)
        localStorage.removeItem('bidItem');
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
<AddProducts />  
<MaterialTable
      icons={tableIcons}
      title="Products"
      columns={state.columns}
      data={data}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
            color: '#FFF',
          fontWeight: 'bold',
        }
      }}
      style={{
        width: "100%",
      }}
      editable={{
       
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              // resolve();
              // if (oldData) {
              //   setdata(prevState => {
              //     const data = [...prevState.data];
              //     data[data.indexOf(oldData)] = newData;
              //     return { ...prevState, data };
              //   });
              const data_ = data;
              const index = data_.indexOf(oldData)
              data_[index] = newData;
              let newvalue = data_[index];
              console.log(newvalue._id);
              axios.put('http://localhost:3003/product/updateproduct/' + newvalue._id, newvalue);
              console.log(newvalue);
              // var dat = [];
              // dat = JSON.parse(newvalue);
              // data.map((key,index)=>{
              //   //data[key]
              //   console.log(data[key])
              // });
//              console.log(data);
              resolve();
            }, 600);
          }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              // resolve();
              // setState(prevState => {
              //   const data = [...prevState.data];
              //   data.splice(data.indexOf(oldData), 1);
              //   return { ...prevState, data };
              // });
              let data_ = data;
              const index = data_.indexOf(oldData);
              console.log(data_[index]);
              let deletevalue = data_[index];
              console.log(deletevalue._id)
              setdata(deletevalue)
              console.log(data);
              axios.delete('http://localhost:3003/product/deleteproduct/' + deletevalue._id , data)
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.log(err)
              });
              data_.splice(index, 1);
              setdata(data_);
//              console.log(data_[index - 1]);
              resolve();

            }, 600);
          }),
      }}
    /> 
    </div>           
        );
    }

export default ViewProducts;