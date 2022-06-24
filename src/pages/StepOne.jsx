import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@mui/material";
import { Box } from "@mui/system";

import SelectField from "../components/SelectField";
import TextFieldCom from "../components/TextField";

const Setting = () => {
  const history = useHistory();

  const difficultyOption = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  return (
    <form>
      <SelectField options={difficultyOption} label="Difficulty" />
      <TextFieldCom />
      <Box mt={3} width="100%">
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            history.push("/step-two");
          }}
        >
          Next
        </Button>
      </Box>
    </form>
  );
};

export default Setting;
