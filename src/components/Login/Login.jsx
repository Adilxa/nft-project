import React from "react"
import { Grid, Box, TextField, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addLogin, addPassword } from "../store/loginReducer";
import { useDispatch } from "react-redux";

const Login = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEnter = () => {
    if (login && password === "admin") {
      dispatch(addLogin(login))
      dispatch(addPassword(password))
      navigate('/')
    } else {
      setError(true)
    }
  }
  const handleExit = () => {
    navigate('/')
  }
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Grid container spacing={2} sx={{
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '100px'
      }}>
        <Grid item sx={{ height: '70px', width: '50%' }}>  {
          error && <Alert severity="error">Error try again later!</Alert>
        }</Grid>
        <Grid item><TextField onClick={() => setError(false)} onChange={(e) => setLogin(e.target.value)} id="outlined-basic" label="Login" variant="outlined" /></Grid>
        <Grid item><TextField onClick={() => setError(false)} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" /></Grid>
        <Grid spacing={5} item sx={{
          display: 'flex',
          width: '30%',
          justifyContent: 'space-between'
        }} >
          <Button item variant="outlined" onClick={handleEnter}>Save</Button>
          <Button item variant="outlined" onClick={handleExit}>Exit</Button></Grid>
      </Grid>
    </Box>
  )
}

export default Login;