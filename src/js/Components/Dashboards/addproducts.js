import React from 'react';
import axios from 'axios';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Form from 'react-bootstrap/Form';
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Livemain from '../Livesession/livesessionmain'

function Addproducts(props){
    

  const [ptitle,setptitle] = React.useState('');
  const [startprice, setprice] = React.useState(''); 
  const [description,setdescription] = React.useState('');
  const [sname,setsname] = React.useState('');
  const [location,setlocation] = React.useState('');
  const [data] = React.useState(['']);
  const [category, setstate] = React.useState('');
  const [pic, setpic] = React.useState('');
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleClick = () => {
        //setOpen(false);

      };
  
    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
      
        },
          formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        }
      }));
      const classes = useStyles();
      
      const [value, setValue] = React.useState('');
    
  const handleradioChange = event => {
      setValue(event.target.value);
  };
  const handlecategorychange = event =>{
    setstate(event.target.value);
  }


    function submit(){

      const data = {
        name: ptitle,
        price: startprice,
        sname: sname,
        description: description,
        adress: location,
        auctiontype:value,
        pic:pic
      };
      console.log("To Send"+data);
      axios
      .post('http://localhost:3003/product/', data)
      .then(res=>{
        console.log(res);
        console.log(res.data);
      });
      if(value === "Live Session Auction"){
        return <Livemain />;
      }
     
    }

    

    const ptitleChange = event => {
      setptitle(event.target.value);
      
    };

    const pricechange = event =>{
      setprice(event.target.value);
    };
    
    return (
      <div>
         <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >Add Product</Button>
<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">ADD PRODUCT DETAILS</DialogTitle>
          <Form encType="multipart/form-data">
          <DialogContent>
            <TextField required
              autoFocus
              margin="dense"
              id="name"
              label="Product Title"
              name="ptitle"
              inputref = "ptitle"
              value={ptitle}
              onChange={ptitleChange} 
            />
            &nbsp;&nbsp;
             <TextField required
              margin="dense"
              id="price"
              label="Enter Starting Price"
              type="Number"
              name='sprice'
              value={startprice}
              onChange={pricechange}
            />
 <TextField
 required             margin="dense"
              id="detail"
              label="Enter Description"
              name="description"
              value={description}
              onChange={e => setdescription(e.target.value)}
            />
 <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Category</InputLabel>
        <Select required
    native
          value={category}
          onChange={handlecategorychange}
          inputProps={{
            name: 'category',
            id: 'age-native-simple',
          }}
        >
          <option value="" />
          <option value={"Clothing"}>Clothing</option>
          <option value={"Shoes"}>Shoes</option>
          <option value={"Smartphones"}>Smartphones</option>
          <option value={"Electronics"}>Electronics</option>
          <option value={"Household items"}>Houshold items</option>
        </Select>
      </FormControl>
      <TextField
        required
        margin="dense"
              id="detail"
              label="Seller Name"
              name="sellername"
              value={sname}
              onChange={e => setsname(e.target.value)}
            />
 <TextField
              required
              margin="dense"
              id="detail"
              label="Location"
              name="location"
              value={location}
              onChange={e => setlocation(e.target.value)}
            />
  <input type="file" name='pic' onChange={e => setpic(e.target.value)} />    
<FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Choose Auction Type</FormLabel>
        <RadioGroup aria-label="Choose Auction Type"   name="auctiontype"            value={value} onChange={handleradioChange}>
          <FormControlLabel value="Ordinary Auction" control={<Radio />} label="Ordinary Auction" />
          <FormControlLabel value="Live Session Auction" control={<Radio />} label="Live Session Auction" />
          </RadioGroup>
          </FormControl>

          </DialogContent>
      
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={submit} color="primary">
              Save
            </Button>
          </Form>
        </Dialog>
      </div>
    );  
    }

export default Addproducts;