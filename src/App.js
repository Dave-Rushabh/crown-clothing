import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/home/HomePage";
import NavigationBar from "./routes/navigation/NavigationBar";
import Authentication from "./routes/authentication/Authentication";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<HomePage />} />
          <Route path="/authentication" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
