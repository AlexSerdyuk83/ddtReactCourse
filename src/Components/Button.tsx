import React, {MouseEventHandler} from "react";

interface buttonProps {
  text?: string,
  onClickHandler?: MouseEventHandler
}

function Button({ text = 'Submit', onClickHandler = () => {}}: buttonProps) {
  return (
    <div className="row btn-block">
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-warning"
          type="button"
          onClick={onClickHandler}
        >
          {text}
        </button>
      </div>
    </div>
  )
}

export default Button;

