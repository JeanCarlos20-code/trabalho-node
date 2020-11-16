import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 1000,
  },
});

 function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://s2.glbimg.com/9Sb-twMyPpkgJ3-BtLUAOvTJf4U=/0x0:1920x1284/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/b/c/AFUeXhQMAiUy4sWqG2Ig/compra-de-carros-usados.jpg' 
        />
      </CardActionArea>
    </Card>
  );
}

export default MediaCard
