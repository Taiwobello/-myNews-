import { Provider } from "react-redux";
import store from "./redux/store";
import { Switch, Route, HashRouter} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BussinessPage from "./pages/BussinessPage/BussinessPage";
import SportPage from "./pages/SportPage/SportPage";
import EntertainmentPage from "./pages/EntertainmentPage/EntertainmentPage";

import {ThemeProvider} from "styled-components";
import HealthPage from "./pages/HealthPage/HealthPage";


const theme = {
  colorPrimary: "#E43338",
  colorWhite: "#fff",
  colorBlack: "#000000",
  marginSmall: "1.5rem",
  marginMedium: "3rem",
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={HomePage} /> 
              <Route exact path="/business" component={BussinessPage} />
              <Route exact path="/sports" component={SportPage} />
              <Route exact path="/entertainment" component={EntertainmentPage} />
              <Route exact path="/health" component={HealthPage} />
            </Switch>
          </HashRouter>          
      </ThemeProvider>
    </Provider>
    
  );
}

export default App;
