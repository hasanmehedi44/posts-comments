import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Box, Button, Collapse, Card } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { ImgUrlContext } from '../../App';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
const PostDetail = () => {
    const [postDetail, setPostDetail] = useState([]);
    const [comments, setComments] = useState([]);
    const [url] = useContext(ImgUrlContext);
    const {postId} = useParams();
    

    const postDetailServer = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(post => setPostDetail(post));
    }

    const commentServer = () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }

    useEffect(postDetailServer,[])
    useEffect(commentServer,[])

    const {title, body} = postDetail;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <div>
            <h1>this is post detail section</h1>
            <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          {/* <MoreVertIcon/> */}
        </IconButton>
      }
      title={title}
      subheader="September 14, 2016"
    />
    <CardMedia
      className={classes.media}
      image={url}
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {body}
      </Typography>
    </CardContent>
    <CardActions disableSpacing display='flex'>
      <Box flexGrow={1}>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
        </IconButton>
      </Box>
      <Button onClick={handleExpandClick} color='primary' >
                      Comments
      </Button>
      <IconButton aria-label="share">
        {/* <ShareIcon /> */}
      </IconButton>
      {/* <IconButton
        aria-label="share"
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton> */}
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        {
          comments.map(comment => <Comment comment = {comment}></Comment>)
        }
        {/* <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
          minutes.
        </Typography> */}
        
      </CardContent>
    </Collapse>
  </Card>
        </div>
    );
};

export default PostDetail;