import "./reachOutForm.css";

const ReachOutForm = () => {
  return (
    <div>
      <div className="form-page">
        <div className="about-us">
          <h4 className="about-us-title">About Recipee</h4>
          <p className="about-us-content">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock
          </p>
        </div>

        <div className="form">
          <p className="contact-form-header">Contact Form</p>
          <form
            action="https://formspree.io/f/xleaqkbq"
            method="POST"
            className="reveal-content contact-form"
          >
            <div>
              {/*email */}
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="_replyto"
                  id="email"
                  placeholder="Email"
                />
              </div>

              {/*subject*/}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>

              {/*message*/}
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  name="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg submit-button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReachOutForm;
