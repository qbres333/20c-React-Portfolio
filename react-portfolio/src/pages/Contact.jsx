export default function Contact() {
    return (
      <div className="container container-fluid mt-5 mb-5">
        <h3 className="page-title"><b>Contact</b></h3>
        <form
          className="col-6 form contact-form mt-4 needs-validation"
          novalidate
        >
          <div className="form-group">
            <label for="validationDefault01" className="form-label">
              <b>Name:</b>
            </label>
            <input
              className="form-input form-control"
              id="validationDefault01"
              name="contact-name"
              type="text"
              required
            ></input>
            <div className="invalid-feedback">Please enter your name</div>
          </div>

          <div className="form-group mt-3">
            <label for="validationDefault02" className="form-label">
              <b>Email Address:</b>
            </label>
            <input
              className="form-input form-control"
              id="validationDefault02"
              name="contact-email"
              type="email"
              required
            ></input>
            <div className="invalid-feedback">
              Please enter your email address
            </div>
          </div>

          <div className="form-group mt-3">
            <label for="validationDefault03" className="form-label">
              <b>Message:</b>
            </label>
            <textarea
              className="form-input form-control"
              id="validationDefault03"
              name="contact-message"
              required
            ></textarea>
            <div className="invalid-feedback">
              Please enter your message
            </div>
          </div>

          <div className="d-grid mt-4">
            <button className="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
    );
}