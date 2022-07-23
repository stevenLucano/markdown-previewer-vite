import { useEffect, useState } from "react";
import "./App.css";
import Reference from "./components/Reference";
import WindowPreviewer from "./components/WindowPreviewer";

function App() {
  window.addEventListener("resize", () => {
    changeHover(window.innerWidth, screen.width);
  });

  const [content, setContent] = useState("");

  const newContent = (cont) => {
    setContent(cont);
  };

  const changeHover = (wnWidth, scWidth) => {
    const aRef = document.getElementsByClassName("ref-link");
    if (wnWidth <= 620 || scWidth <= 620) {
      aRef[0].classList.remove("ref-link-hover");
    } else {
      aRef[0].classList.add("ref-link-hover");
    }
  };

  useEffect(() => {
    changeHover(window.innerWidth, screen.width);

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
      <Reference />
    </div>
  );
}

export default App;
