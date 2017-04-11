import React from 'react';
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
          <div className="form-messages">{this.state.message}</div>
          {form}
        </Content>
      </Page>
    );
  }

}

export default Sessions;
