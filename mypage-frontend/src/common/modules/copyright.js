import { Link, Typography } from '@mui/material';
import React from 'react';

const Copyright = (props) => {

    return (
        <div>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="/">
                    MyPage
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
};

export default Copyright;