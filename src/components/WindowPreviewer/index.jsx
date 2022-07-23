import React, { useEffect, useState } from "react";
import "./style.scss";
import { marked } from "marked";

const WindowPreviewer = ({ name, contentTxt, fnc }) => {
  const [open, setOpen] = useState("");
  marked.setOptions({
    breaks: true,
  });

  const changeWindow = (id) => {
    open === "" ? setOpen(id) : setOpen("");
  };

  useEffect(() => {
    if (open !== "") {
      const icon = document.getElementById(`icon-${open}`);
      let classWindow = "";
      if (open === "editor") {
        const editor = document.getElementById("editor");
        classWindow = "window-previewer";

        editor.style.minHeight = "80vh";
      } else {
        classWindow = "window-editor";
      }

      const windowClosed = document.getElementsByClassName(classWindow);
      windowClosed[0].style.display = "none";

      icon.classList.remove("bi-arrows-fullscreen");
      icon.classList.add("bi-arrows-angle-contract");
    } else {
      let icons = document.getElementsByClassName("icon-bootstrap");
      let windows = document.getElementsByClassName("window");

      icons = [...icons];
      icons.forEach((icon) => {
        icon.classList.remove("bi-arrows-angle-contract");
        icon.classList.add("bi-arrows-fullscreen");
      });

      windows = [...windows];
      windows.forEach((window) => {
        window.style.display = "";
      });

      const editor = document.getElementById("editor");
      editor.style.minHeight = "200px";
    }
  }, [open]);

  return (
    <div className={`window window-${name}`}>
      <div className="window-title">
        <p className="window-title-text">{name}</p>
        <div
          className="window-title-icon"
          onClick={() => {
            changeWindow(name);
          }}
        >
          <i
            className="bi bi-arrows-fullscreen icon-bootstrap"
            id={`icon-${name}`}
          ></i>
        </div>
      </div>
      {name === "editor" ? (
        <textarea
          id="editor"
          defaultValue={contentTxt}
          onChange={(e) => {
            fnc(e.target.value);
          }}
        ></textarea>
      ) : (
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(contentTxt) }}
        ></div>
      )}
    </div>
  );
};

export default WindowPreviewer;
