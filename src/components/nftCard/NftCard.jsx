import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import css from "./nftCard.module.scss";

export default function NftCard({ el }) {
  console.log(el);
  console.log(el.asset_contract.address);
  console.log(el.token_id);
  console.log(`${el.asset_contract.address}/${el.token_id}`)
  return (
    <Card sx={{ maxWidth: 345, width: '30%', heigth:'150px' }}>
      <CardMedia
        component="img"
        height="140"
        image={el.image_preview_url}
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name ? el.name : "no name"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{height:'100px', overflowX:'scroll'}}>
          {el.collection.description ? el.collection.description : "No Description"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link id={css.col} to={`${el.asset_contract.address}/${el.token_id}`}>Learn More</Link></Button>
      </CardActions>
    </Card>
  );
}