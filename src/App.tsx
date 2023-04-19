import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, Container } from "./template";
import { Characters, Episodes, Details } from "./pages";
import { store } from "./context/store";

const App: React.FC = (): React.ReactElement => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<Details />} />
          <Route path="*" element={<Characters />} />

          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  </Provider>
);

export default App;
