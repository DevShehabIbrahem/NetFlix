import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "./modal-video.scss";

const Modal = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <button className="btn-primary" onClick={() => setOpen(true)}>
        ss
      </button>
    </div>
  );
};

export default Modal;
