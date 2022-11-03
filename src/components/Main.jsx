import React, { useState, useEffect } from 'react'
import Header from "../components/Header/Header";
import "./main.module.scss";
import { Grid, Typography, Button, Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addLogin } from './store/loginReducer';
import NftCard from './nftCard/NftCard';

export default function Main() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const logOut = () => {
    dispatch(addLogin(''))
  }
  const [nft, setNft] = useState([]);
  const cont = useSelector((state) => state.login.login)
  useEffect(() => {
    fetch('https://api.opensea.io/api/v1/assets?format=json')
      .then((res) => res.json())
      .then((data) => {
        setNft(data.assets)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  console.log(nft);
  return (
    <>
      <Header />
      <Grid container spacing={3} sx={{
        height: '80vh'
      }}>
        <Grid item xs={2} sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <Grid sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '50%'
          }}>
            <Button>
              <Typography component='p' variant="p">
                Exchange
              </Typography>
            </Button>
            <Button>
              <Typography component='p' variant="p">
                Poll
              </Typography>
            </Button>
            <Button>
              <Typography component='p' variant="p">
                Farm
              </Typography>
            </Button>
            <Button>
              <Typography component='p' variant="p">
                History
              </Typography>
            </Button>
            <Button>
              <Typography component='p' variant="p">
                Settings
              </Typography>
            </Button>
          </Grid>
          <Button onClick={logOut} color='error'>
            Log Out
          </Button>
        </Grid>
        <Grid spacing={2} item xs={10}>
          {
            loading && <Box sx={{ display: 'flex', height: '80vh', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <CircularProgress />
            </Box>
          }
          {cont ? <Grid sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-evenly',
            gap: '20px',
            overflowY: 'scroll',
            height: '80vh',
          }}>
            {
              nft.map((el) => <NftCard name={el.name} el={el} />)
            }
          </Grid>
            : <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' , gap:'30px', height:'90%'}}>
              Need To Register
              <p>
                Password: admin
              </p>
              <p>
                Login: admin
              </p>
            </Grid>
          }
        </Grid>
      </Grid>
    </>
  )
}
