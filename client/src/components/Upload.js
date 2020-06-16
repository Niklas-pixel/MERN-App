import React, { useState, useContext } from "react";
import "../css/upload.css";
import { Context } from "../context/Context";

function Upload() {
  const { onChangeHandler, onClickHandler } = useContext(Context);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group files">
            <label>Upload Your File </label>
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={onChangeHandler}
            />
          </div>
          <button
            type="button"
            className="btn btn-success btn-block"
            onClick={onClickHandler}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
