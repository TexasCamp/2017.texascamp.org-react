import React from 'react';

function NewsletterForm() {
  let action = 'https://texascamp.us14.list-manage.com/subscribe/post?u=570bd5ca3ae1bf17bce28a1ad&amp;id=076e5f40d9';

  return (
    <div className="newsletter">
      <form
        action={action} method="post" name="mc-embedded-subscribe-form" className="validate"
        target="_blank" noValidate
      >
        <div className="mc-field-group">
          <label htmlFor="mce-NAME" className="visuallyhidden">Name</label>
          <input type="text" name="NAME" placeholder="Name" className="imperfect--one" />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL" className="visuallyhidden">Email address</label>
          <input type="email" name="EMAIL" placeholder="Email address" className="imperfect--two" />
        </div>
        <div className="clear">
          <div className="response" style={{ display: 'none' }}></div>
          <div className="response" style={{ display: 'none' }}></div>
        </div>
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_570bd5ca3ae1bf17bce28a1ad_076e5f40d9" tabIndex="-1" />
        </div>
        <div className="clear submit">
          <input type="submit" value="Sign Up" name="subscribe" className="button--primary" />
        </div>
      </form>
    </div>
  );
}

export default NewsletterForm;
