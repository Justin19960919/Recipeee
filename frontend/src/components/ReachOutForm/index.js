import "./reachOutForm.css";

const ReachOutForm = () => {
  return (
    <div>
      <div className="form-page">
        <div className="about-us">
          <h4 className="about-us-title">About Recipee</h4>
          
          <p className="about-us-content">
          Recipee, a place where you find all your favorite recipes, and see how others succeed in cooking it! Out mission is to help impove life in the kitchen for millions of home cooks around the world
          </p>
          <div className="features">
            <span className="feature"> 
              <span className="feature-detail">4.5+</span>
              <span className="feature-title">App Rating</span>
            </span>
            <span className="feature"> 
              <span className="feature-detail">1M+</span>
              <span className="feature-title">Recipes</span>
            </span>
            <span className="feature"> 
              <span className="feature-detail">10M</span>
              <span className="feature-title">Users</span>
            </span>
            
          </div>
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
