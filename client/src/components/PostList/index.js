import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

import { Grid } from '@material-ui/core';
import Post from './Post';
import { postsState$ } from '../../redux/selectors';

function PostList(props) {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);

    React.useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest())
    }, [dispatch]);

    return (
        <Grid container spacing={2} alignItems="stretch">
            {posts.map(post => (
                <Grid key={post._id} item xs='12' sm='6'>
                    <Post post={post} />
                </Grid>
            ))}
        </Grid>
    );
}

export default PostList;