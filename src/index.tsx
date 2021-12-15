import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NoMatch from "./routes/NoMatch";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
