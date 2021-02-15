import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/header";
import Footer from "./ui/footer";
import theme from "./ui/theme";

import Photos from "./ui/photos";
import About from "./ui/about";
import Audio from "./ui/audio";
import Projects from "./ui/projects";
import Home from "./ui/home";
import Media from "./ui/media";
import Contact from "./ui/contact";
import Videos from "./ui/videos";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/audio" component={Audio} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/estimate"
            component={() => <div>Free Estimate</div>}
          />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
