import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    comment: 'enter comment here!'
  }

  handleSubmit = event => {
    event.preventDefault();

    const { comment } = this.state;
    this.props.onSubmit(comment);
    this.setState({ comment: '' });
  }

  updateComment = ({ target }) => {
    this.setState({ comment: target.value });
  }

  render() {
    const { comment } = this.state;
    const textareaStyle = { width: '50vw', height: '25vh' };
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea style={textareaStyle} value={comment} onChange={this.updateComment}></textarea>
        <br />
        <button>Submit</button>
      </form>
    );
  }
}
