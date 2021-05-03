import React from 'react';
import { useDispatch } from 'react-redux';
import { loginAccount } from '../../redux/actions';

import { Typography, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import useStyles from './style';

function Login(props) {
    const [data, setData] = React.useState({
        username: '',
        password: ''
    });

    const dispatch = useDispatch();
    const classes = useStyles();

    const onLogin = React.useCallback(() => {
        dispatch(loginAccount.loginAccountRequest(data));
    }, [dispatch, data]);

    return (
        <div align="center">
            <Typography variant="h4" className={classes.container}>
                Blog
            </Typography>
            <FormControl>
                <InputLabel htmlFor="username" >Username</InputLabel>
                <Input id="username" required value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel htmlFor="password" >Password</InputLabel>
                <Input id="password" required value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            </FormControl>
            <br/>
            <Button onClick={onLogin}>Login</Button>
        </div>
    );
}

export default Login;