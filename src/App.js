import React from "react";
import "./styles.css";

import FileExplorer from "./FileExplorer";
import { data } from "./data"

export default function App() {
  return (
    <div className="App">
      <FileExplorer data={data} />
    </div>
  );
}
