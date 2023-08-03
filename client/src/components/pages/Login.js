import * as React from 'react';
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as RRRLink} from "react-router-dom";

import Auth from '../../utils/auth';



const defaultTheme = createTheme();

export default function Login(props) {
  const [formState, setFormState] = useState({ 
    email: '',
    password: ''
  })
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState, [name]: value,
    })
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    const { data } = await login({
      variables: { ...formState },
    })

      Auth.login(data.login.token)
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    })
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container sx={{ bgcolor: "white" }} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {data ? (
            <p> You're logged in!{' '}
            <RRRLink to="/profile">to your profile</RRRLink>
            </p>
          ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>          
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formState.email}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formState.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <RRRLink to="/signup">
                  {"Don't have an account? Sign Up"}
                </RRRLink>
              </Grid>
            </Grid>
          </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}