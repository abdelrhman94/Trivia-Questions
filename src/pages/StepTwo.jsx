import React from "react";
import { useHistory } from "react-router-dom";

import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import SelectField from "../components/SelectField";
import Axios from "../hooks/Axios";

const StepTwo = () => {
  const { response, loading, error } = Axios({ url: "/api_category.php" });

  const history = useHistory();
  
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong!!
      </Typography>
    );
  }
  

    const handleSubmit = (event) => {
      event.preventDefault();
      history.push("/question");
    };

  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category" />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default StepTwo;
