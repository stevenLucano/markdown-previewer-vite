import React from "react";
import "./style.scss";
import { marked } from "marked";

const WindowPreviewer = ({ name, contentTxt, fnc }) => {
  marked.setOptions({
    breaks: true,
  });

  return (
    <div className={`window window-${name}`}>
      <p className="window-title">{name}</p>
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
        >
          {/* {contentTxt} */}
        </div>
      )}
    </div>
  );
};

export default WindowPreviewer;
