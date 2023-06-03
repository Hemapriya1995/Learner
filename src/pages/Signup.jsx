/*eslint-disable*/

import  React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';


import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Padding } from '@mui/icons-material';
import LoadingSpinner from './Loader/LoadingSpinner';
import { handleSignUp } from '../services/Api';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { isAuthenticated } from '../services/Auth';
import {Navigate,Link} from 'react-router-dom';
import { setUser } from '../services/common';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

const[loading,setIsLoading]=useState(false);
const[success,setSuccess]=useState(false);
const initialerrorState={
  name:{required:false},
  email:{required:false},
  password:{required:false},

};

  const [errors,setErrors]=useState(initialerrorState);
  const [inputs,setInputs]=useState({
    name:" ",
    email:" ",
    password:" ",

  })


  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); 
   let errors=initialerrorState;
   let haserror=false;
   if(inputs.email === " "){
    errors.email.required=true;
    haserror=true;
   }
   if(inputs.name === " "){
    errors.name.required=true;
    haserror=true;
   }
   if(inputs.password === " "){
    errors.password.required=true;
    haserror=true;
   }
   setErrors(errors);
   
   if( !haserror){
 
    handleSignUp(inputs).then(response => response.json())
    .then((res)=>
      
    {
      setIsLoading(false);
      setSuccess(true);
      setUser(res);
      
    })
    .catch((error)=>{
        console.log(error);
    });

   
   }
  };

  const handleInputs=(e)=>{
    
setInputs({...inputs,[e.target.name]:e.target.value})
  }
const handleClose=()=>{
  setSuccess(false);
}
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

  if (isAuthenticated()){
    console.log("authent");
  return <Navigate to="/Home"></Navigate>
  }

  return (

    
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  onChange={handleInputs}
                  
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
          { errors.name.required? <span style={{color:"red",paddingLeft:'30px'}}>Name is required</span>:null}
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputs}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              {errors.email.required? <span style={{color:"red",paddingLeft:'30px'}}>Email is required</span>:null}
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleInputs}
                  autoComplete="new-password"
                />
              </Grid>
              {errors.password.required? <span style={{color:"red",paddingLeft:'30px'}}>Password is required</span>:null}  
            </Grid>
          {loading?<LoadingSpinner/>:null} 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {success?  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
 
<Alert severity="success">User  {inputs.name} is successfully registered!!</Alert>
</Snackbar>:null}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/SignIn">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}