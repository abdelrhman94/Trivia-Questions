import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/action";

const TextFieldCom = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(handleAmountChange(event.target.value));
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Question"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldCom;
