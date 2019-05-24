import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';
import styles from '../../components/Home.css';

export default class PostForm extends PureComponent {
  //static proptypes typically hint at connect
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: 'enter post title here',
    body: 'enter post text here'
  }

  handleSubmit = event => {
    event.preventDefault();

    const { title, body } = this.state;
    this.props.onSubmit(title, body);
    this.setState({ title: '', body: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, body } = this.state;
    const textareaStyle = { width: '50vw', height: '25vh', margin: '10px', marginBottom: '-5px', marginTop: '10px' };
    

    return (
      <form className={styles.PostForm} onSubmit={this.handleSubmit}>
        <input name="title" value={title} onChange={this.handleChange} />
        <br />
        <textarea style={textareaStyle} name="body" value={body} onChange={this.handleChange}></textarea>
        <br />
        <button>Submit <FaCheck /></button>
      </form>
    );
  }

}
