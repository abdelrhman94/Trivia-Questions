import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { handleScoreChange } from "../redux/action";

const Final = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    localStorage.removeItem("Name");
    history.push("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score for {localStorage.getItem("Name")} {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        back to settings!
      </Button>
    </Box>
  );
};

export default Final;
