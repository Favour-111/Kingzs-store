import React from "react";

function About() {
  return (
    <div>
      <div className="App">
        <h1>About Page</h1>
        <div className="landingImg2">
          <p>Welcome to our e-commerce website</p>
          <p>We sell the best product and they are all affordable</p>
          <div>
            <p>for more information contact us on</p>
            <div className="mails">
              <div>
                <span>E-mail-</span>
                <span className="det">omojolaobaloluwa@gmail.com</span>
              </div>
              <div>
                <span>Phone-Number</span>
                <span className="det">08069989705</span>
              </div>
              <div>
                <span>what-app number</span>
                <span className="det">08069989705</span>
              </div>
              <div>
                <span>Other</span>
                <span className="det">08023911608</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>sign in to our website</p>
        <button>sign-in</button>
        <button>sign-up</button>
      </div>
    </div>
  );
}

export default About;
