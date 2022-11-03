import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Grid, Typography, CardMedia, Button, CircularProgress, Box } from "@mui/material";
import "./moreAbout.module.scss";
import Header from "../../components/Header/Header";

export default function MoreAbout() {
  const id = useParams();
  const [nft, setNft] = useState(null);
  useEffect(() => {
    fetch(`https://api.opensea.io/api/v1/asset/${id?.address}/${id?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setNft(data)
      })
  }, [id])
  console.log(nft);
  if (nft === null) {
    return <Box sx={{ display: 'flex', height: '80vh', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  }
  return (
    <>
      <Header exit={true} />
      <Grid container sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        <Grid sx={{
          width: '80%',
          display: 'flex',
          gap: '50px',
          justifyContent: 'center'
        }}>
          <CardMedia
            item
            component="img"
            height="140"
            image={nft.image_preview_url}
            alt="img"
            sx={{
              width: '400px',
              height: '400px',
              borderRadius: '10px'
            }}
          />
          <Grid sx={{ width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography item variant='h5' component='h5' sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              {nft.name}
            </Typography>
            <Typography item variant='h5' component='h5' sx={{
              display: 'flex',
              flexDirection: 'column'
            }} >
              How Many Time Sales: {nft.num_sales}
            </Typography>
            <Typography item variant='h5' component='h5' sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              User: {nft.creator.user.username}
            </Typography>
            <Typography item variant='h5' component='h5' sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              Create Date: {nft.collection.created_date}
            </Typography>
            <Button sx={{ width: '100%' }} variant="contained">Buy</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
