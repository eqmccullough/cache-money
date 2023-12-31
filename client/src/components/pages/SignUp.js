import * as React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as RRRLink} from "react-router-dom";




const defaultTheme = createTheme();

export default function SignUp() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    income: 0,
    password: '',
  })
  const [addUser, { error, data }] = useMutation(ADD_USER);
  if(error) {
    console.log(JSON.stringify(error));
  }
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState, [name]: name==="income" ? parseFloat (value) : value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    const { data } = await addUser({
      variables: { ...formState },
    });
    
    Auth.login(data.addUser.token);
  } catch (e) {
    console.error(e);
  }
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
            Sign up
          </Typography>
          {data ? ( 
            <p> Success! Your Profile is created. {' '}
            <RRRLink to="/">to your profile</RRRLink>
            </p>
          ) : (
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="family-name"
                  value={formState.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formState.email}
                  onChange={handleChange}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="income"
                  label="Monthly Income"
                  name="income"
                  type="number"
                  autoComplete="income"
                  value={formState.income}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onSubmit={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RRRLink to="/login">
                  Already have an account? Sign in
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