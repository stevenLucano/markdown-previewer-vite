import { useEffect, useState } from "react";
import "./App.css";
import WindowPreviewer from "./components/WindowPreviewer";

function App() {
  const [content, setContent] = useState("");

  const newContent = (cont) => {
    setContent(cont);
  };

  useEffect(() => {
    fetch("./files/file.txt")
      .then((res) => res.text())
      .then((content) => {
        setContent(content);
      });
  }, []);
  return (
    <div className="App">
      <WindowPreviewer name="editor" contentTxt={content} fnc={newContent} />
      <WindowPreviewer name="previewer" contentTxt={content} />
    </div>
  );
}

export default App;
