import { Provider } from "react-redux";
import NewsContainer from "./components/NewsContainer/NewsContainer";
import store from "./redux/store";
import { Switch, Route, HashRouter} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BussinessPage from "./pages/BussinessPage/BussinessPage";
import SportPage from "./pages/SportPage/SportPage";
import EntertainmentPage from "./pages/EntertainmentPage/EntertainmentPage";

import {ThemeProvider} from "styled-components";


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
          {/* <NewsContainer /> */}
          <HashRouter>
            <Switch>
              <Route exact path="/" component={HomePage} /> 
              <Route path="/business" component={BussinessPage} />
              <Route path="/sports" component={SportPage} />
              <Route path="/entertainment" component={EntertainmentPage} />
            </Switch>
          </HashRouter>
      </ThemeProvider>
    </Provider>
    
  );
}

export default App;
