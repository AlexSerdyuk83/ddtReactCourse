import React from "react";

interface ShowTextProps {
  text: string
}

function ShowText({ text }: ShowTextProps) {
  return (
    <div className="row text-block">
      <div className="d-flex justify-content-center">
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default ShowText;
