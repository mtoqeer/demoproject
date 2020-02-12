import React, { useState } from "react";
import PropTypes from "prop-types";
import Toast from "react-bootstrap/Toast";
import ToastBody from "react-bootstrap/ToastBody";
import { connect } from "react-redux";
import { submitForm } from "../actions/formActions";

const Form = ({ submitForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [toastSow, setToastShow] = useState(false);

  const onSubmit = () => {
    if (name === "" || email === "") {
      setToastShow(true);
      setTimeout(function() {
        setToastShow(false);
      }, 3000);
    } else {
      const newFormData = {
        name,
        email,
        telephone,
        subject,
        message
      };

      submitForm(newFormData);

      // Clear Fields
      setName("");
      setEmail("");
      setTelephone("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 offset-md-3">
          <Toast show={toastSow}>
            <ToastBody>Please Fill out the name or email</ToastBody>
          </Toast>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="telephone"
                className="form-control"
                value={telephone}
                onChange={e => setTelephone(e.target.value)}
                placeholder="Telephone"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>

            <a
              href="#!"
              onClick={onSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  submitForm: PropTypes.func.isRequired
};

export default connect(null, { submitForm })(Form);
