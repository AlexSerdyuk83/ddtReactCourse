import React from "react";

function Form() {
  return (
    <form>
      <div className="form-group">
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your comment..."/>
      </div>
      <button type="submit" className="btn btn-success mt-4">Submit</button>
    </form>
  )
}

export default Form;
