import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";

import Copyright from "../components/copyright.cmpt";

import type { NextPage } from "next";

export function getStaticProps() {
  return {
    props: {
      supabaseUrl: process.env.SUPABASE_URL as string,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY as string,
    },
  };
}

type SignUpPageProps = ReturnType<typeof getStaticProps>["props"];

const SignUpPage: NextPage<SignUpPageProps> = ({
  supabaseAnonKey,
  supabaseUrl,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

  const handleSignUp = () => {
    supabaseClient.auth
      .signUp({
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>NextJS Playground</title>
        <meta name="description" content="A place for all things to be" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "centre",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onBlur={(e) => setEmail(e.target.value)}
                error={
                  !!email &&
                  !email?.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
                }
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={
                  !!password &&
                  !!passwordConfirm &&
                  password !== passwordConfirm
                }
              />

              <TextField
                margin="normal"
                disabled={!password}
                required
                fullWidth
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                error={
                  !!password &&
                  !!passwordConfirm &&
                  password !== passwordConfirm
                }
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
              <Grid container sx={{ justifyContent: "center" }}>
                <Grid item>
                  <Button href="#" variant="outlined">
                    {"Sign In"}
                  </Button>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 3 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpPage;
