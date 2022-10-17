import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const [text, setText] = useState("");
  const updateText = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container text-center">
      <h2>Enter text</h2>
      <input type="text" name="text" value={text} onChange={updateText} />
      <div className="m-5">
        <h3>Generated QR Code</h3>
        <QRCodeSVG
          value={text}
          bgColor="#ffffff"
          fgColor="#000000"
          className="btn btn-warning"
        />
      </div>
    </div>
  );
}

export default App;
