import React from "react";

const Form = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 offset-md-3">
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                id="tel"
                placeholder="Telephone"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                id="message"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
