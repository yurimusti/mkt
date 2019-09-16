import React, { useState, useEffect } from "react";
import "./index.scss";

function Photo({ fallbackPhoto, getPicture }) {
  const [baseImage, setBaseImage] = useState(getPicture);
  function previewPicture(event) {
    let reader = new FileReader();
    reader.onload = () => {
      let output = document.getElementById("myfile");
      output.src = reader.result;
      setBaseImage(reader.result.split(",")[1]);
      fallbackPhoto(reader.result.split(",")[1]);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  function propsImage() {
    document.getElementById("myfile").click();
    let formulario = document.getElementById("propsPicture");
    formulario.onsubmit = function() {
      return false;
    };
  }

  const _image = () => {
    if (baseImage === "") {
      return (
        <div className="profiler-photo">
          <div onClick={propsImage} className="send-photo">
            <span>enviar sua foto</span>
          </div>
          <input
            onChange={previewPicture}
            type="file"
            id="myfile"
            style={{
              display: "none"
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="profiler-photo">
          <img
            onClick={propsImage}
            src={baseImage ? "data:image/png;base64," + baseImage : ""}
            className="image-send"
            id="image"
            alt="sendImage"
          />
          <input
            onChange={previewPicture}
            type="file"
            id="myfile"
            style={{
              display: "none"
            }}
          />
        </div>
      );
    }
  };

  return (
    <div className="profiler-photo">
      <form id="propsPicture">{_image()}</form>
      <p style={{ color: "#8872B2" }}>
        Você pode adicionar sua foto no futuro, caso queria pular esta estapa
        agora.
      </p>
    </div>
  );
}

export default Photo;
