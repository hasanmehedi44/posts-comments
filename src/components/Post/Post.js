import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { ImgUrlContext } from '../../App';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';







const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
  });

const Post = ({post}) => {
    const random = Math.round((Math.random() * 80) + 12);
    const randomNumber = parseInt(random);
    const {id, title, body} = post;
    const imgUrl = `https://picsum.photos/500/8${randomNumber}`;
    
    const classes = useStyles();
    const history = useHistory();

    const [url, setUrl] = useContext(ImgUrlContext);

    const handleSeeMore = () => {
        history.push(`/post/${id}`);
        setUrl(imgUrl);
    }

    return (
        <div>
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={imgUrl}
                    title={title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleSeeMore}>
                    see More
                    </Button>
                </CardActions>
                </Card>
        </div>
    );
};

export default Post;