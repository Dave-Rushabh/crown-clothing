import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/home/HomePage";
import NavigationBar from "./routes/navigation/NavigationBar";
import Signin from "./routes/sign-in/SignIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<HomePage />} />
          <Route path="/sign-in" element={<Signin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
