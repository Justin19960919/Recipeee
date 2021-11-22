import "./reachOutForm.css";

const ReachOutForm = () => {
  return (
      <div>
      <p className="contact-form-header">Contact Form</p>
      <form action="https://formspree.io/f/xleaqkbq" method="POST"
          className="reveal-content contact-form">
        <div>
          {/*email */}
          <div className="form-group">
            <input type="email" className="form-control" name="_replyto" id="email"
                   placeholder="Email"/>
          </div>

          {/*subject*/}
          <div className="form-group">
            <input type="text" className="form-control" id="subject"
                   placeholder="Subject"/>
          </div>

          {/*message*/}
          <div className="form-group">
            <textarea className="form-control" rows="5" name="message"
                      placeholder="Enter your message"></textarea>
          </div>

          <button type="submit"
                  className="btn btn-primary btn-lg submit-button">Send
          </button>

          </div>
      </form>


      </div>
  );
}


export default ReachOutForm;