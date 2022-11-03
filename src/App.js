import { RouterProvider } from "react-router-dom";

import "./App.css";
import UserContext from "./Context/UserContext";
import { router } from "./Routes/Route";

const route = router;

function App() {
  return (
    <div>
      <UserContext>
        <RouterProvider router={route} />
      </UserContext>
    </div>
  );
}

export default App;
