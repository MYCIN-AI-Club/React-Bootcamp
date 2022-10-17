import { useState } from "react";

function Titlebar() {
  var [title, setTitle] = useState("Hello");

  function changeTitle() {
    setTitle("Said Hello.");
  }

  return (
    <di>
      {title}
      <button type="button" onClick={changeTitle}>
        Change title
      </button>
    </di>
  );
}

export default Titlebar;
