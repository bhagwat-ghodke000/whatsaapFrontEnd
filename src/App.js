import { Route, Routes } from "react-router-dom";
import HomePage from "./componets/HomePage";
import Status from "./componets/Status/Status";
import StatusViewer from "./componets/Status/StatusViewer";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/status" element={<Status />} />
         <Route path="/status/:userId" element={<StatusViewer />} />
      </Routes>
    </div>
  );
}

export default App;
