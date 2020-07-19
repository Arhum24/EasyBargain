import { makeStyles } from '@material-ui/core/styles';

const styles =  makeStyles(theme => ({

  paper:{
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '100%',
    backgroundColor: '#075559',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#75EAE7',
      color: '#075559'
      
  },
},

 MuiPhoneNumber: {
  border: 'solid'

 },

})
  
  );

export default styles;