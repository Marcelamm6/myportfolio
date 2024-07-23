import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photoname=''/>
      <div className="data">
        <h1>Jonas Schmmedtmann</h1>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function DataStuff(props) {
  return(
    
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
