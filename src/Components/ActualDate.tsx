import React from "react";

interface ActualDateProps {
  date: string
}

function ActualDate({ date }: ActualDateProps) {
  return (
    <div className="col-6 form-lock">
      <p>Today: {date}</p>
    </div>
  )
}

export default ActualDate;
