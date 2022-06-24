import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, TextField, FormControl } from "@mui/material";
import { Box } from "@mui/system";

import SelectField from "../components/SelectField";
import TextFieldCom from "../components/TextField";

const Setting = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const difficultyOption = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  return (
    <form>
      <Box mt={3} width="100%">
        <FormControl fullWidth size="small">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            variant="outlined"
            label="Amount of Question"
            type="text"
            size="small"
          />
        </FormControl>
      </Box>
      <SelectField options={difficultyOption} label="Difficulty" />
      <TextFieldCom />
      <Box mt={3} width="100%">
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            history.push("/step-two");
            localStorage.setItem("Name", name);
          }}
        >
          Next
        </Button>
      </Box>
    </form>
  );
};

export default Setting;
