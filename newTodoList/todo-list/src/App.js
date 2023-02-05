import styles from "./App.css";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import Add from "./Components/Add";
import Readmore from "./Components/Readmore";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className={styles["App"]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit/:itemId" element={<Edit />} />
          <Route path="/readmore" element={<Readmore />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

