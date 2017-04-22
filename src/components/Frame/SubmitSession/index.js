import React from 'react';
import { Link } from 'react-router-dom';
// Required for Form.io <select> components
import 'react-widgets/lib/scss/react-widgets.scss';
// Required for Form.io WYSIWYG
import 'quill/dist/quill.snow.css';
import { Formio } from 'react-formio';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './sessions-bg.jpg';

class Sessions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Loading...',
      sessionSubmitted: false,
    };

    this.onLoad = this.onLoad.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onLoad() {
    this.setState({ message: '' });
  }

  onSuccess() {
    this.setState({
      sessionSubmitted: true,
      message: 'Thanks for your submission, we\'ll holler at ya soon!',
    });
  }

  render() {
    const classes = ['one-col', 'light-bg', 'fixed-bg'];
    let form = (<Formio
      src="https://jqvzsivhnemmbtq.form.io/session"
      onFormLoad={this.onLoad}
      onFormSubmit={this.onSuccess}
    />);

    if (this.state.sessionSubmitted) {
      form = <span />;
    }

    return (
      <Page name="submit-session" background={background} classes={classes}>
        <Title level="h2" title="Submit A Session" />
        <Content classes={['content--body']}>
          <p>
            Texas Camp is soliciting sessions geared toward beginner through advanced Drupal users.
            If you're passionate about the topic, we want to hear it! Subject matter can be Drupal,
            PHP in general, related technologies, soft skills, testing, tools, workflow, etc.
          </p>
          <p>
            We're looking for sessions that are 45 minutes long to allow 10 minutes for audience
            Q+A. You may promote a project or organization you are working on if it is relevant, but
            please no sales pitches. Speakers are expected to follow our&nbsp;
            <Link to="/code-of-conduct">code of conduct</Link>.
          </p>
          <p>
            Speakers will receive a free ticket to the event. We are not yet able to pay speakers
            for their time.
          </p>
          <p>
            Email <a href="mailto:hello@texascamp.org">hello@texascamp.org</a> or tweet
            &nbsp;<a href="https://twitter.com/drupaltexascamp">@drupaltexascamp</a> with questions.
          </p>
          <div className="form-messages">{this.state.message}</div>
          {form}
        </Content>
      </Page>
    );
  }

}

export default Sessions;
