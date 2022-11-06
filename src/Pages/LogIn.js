import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LoginHeader from "../Components/LoginHeader";
import LoginForm from "../Components/LoginForm";

const LogIn = () => {
  return (
    <section>
      <Box sx={{ flexGrow: 1 }} spacing={3}>
        <Grid container>
          <Grid item xs={6} md={4}>
            <LoginHeader></LoginHeader>
          </Grid>
          <Grid item xs={12} md={8}>
            <LoginForm></LoginForm>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default LogIn;
