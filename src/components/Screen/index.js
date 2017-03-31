import React from 'react';

class Screen extends React.Component {
  constructor() {
    super();
    this.state = {
      headerHeight: '50',
    };
  }

  componentDidMount() {
    this.setHeight();
  }

  setHeight() {
    const actualHeight = document.getElementById('header').clientHeight;
    this.setState({
      headerHeight: actualHeight,
    });
  }

  render() {
    const classes = [
      'pages',
      `screen--${this.props.name}`,
    ].concat(this.props.classes);

    const styles = {
      marginTop: `${this.state.headerHeight}px`,
    };

    return (
      <section className={classes.join(' ')} style={styles}>
        {this.props.children}
      </section>
    );
  }
}

Screen.propTypes = {
  name: React.PropTypes.string.isRequired,
  classes: React.PropTypes.array,
  children: React.PropTypes.node,
};

export default Screen;
