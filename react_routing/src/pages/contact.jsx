function Contact() {
  return (
    <div className="text-center mt-5">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label for="name" className="">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label for="email" className="">
                      Your email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label for="subject" className="">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label for="message">Your message</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <button
                onClick={() => {
                  alert("Data Submitted Successfully!");
                }}
                className="btn btn-primary"
                style={{ marginTop: "10px" }}
              >
                Submit
              </button>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>KIET Group of Institutions, Muradnagar</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+917898453290</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@kiet.edu</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
