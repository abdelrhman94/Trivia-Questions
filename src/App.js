import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StepOne from "./pages/StepOne";
import Final from "./pages/Final";
import Question from "./pages/Question";
import Error from "./components/404/Error";

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import StepTwo from "./pages/StepTwo";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Switch>
            <Route exact path="/">
              <Typography variant="h2" fontWeight="bold">
                Trivia Questions Game
              </Typography>
              <StepOne />
            </Route>
            <Route path="/step-two">
              <StepTwo />
            </Route>
            <Route path="/question">
              <Question />
            </Route>
            <Route path="/score">
              <Final />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
