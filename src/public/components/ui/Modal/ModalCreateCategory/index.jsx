import React, { Component } from 'react';
import ModalContainer from '../ModalContainer/ModalContainer';
import css from './modalCreateCategory.module.sass';

export default class ModalCreateCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      errorText: '',
    }
  }

  render() {
    return (
      <ModalContainer>
        <h1 className="title1">Create category</h1>
        <div className="form-group">
          <label className={css.label}>
            Category name
            <input type="text" className={`${css.inputText} form-control`} />
          </label>
        </div>
        <button className="defaultButton btn btn-primary">Create</button>
      </ModalContainer>
    );
  }
}
