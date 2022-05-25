import React from "react";

export default function Success(success) {
  return (
    <div>
      <div classname="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{success}</strong> 
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}
