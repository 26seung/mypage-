import * as React from 'react';
import {Box, Link, AppBar, Toolbar } from '@mui/material';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

const AppAppBar = () => {
  return (
    <div>
      <AppBar position="fixed" >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 22 }}
          >
            {'테스트페이지입니다.'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/join"
              sx={rightLink}
            >
              {'회원가입'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/login"
              sx={rightLink}
            >
              {'로그인'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;