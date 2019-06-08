import React, { Component } from 'react';
import ModalContainer from '../ModalContainer/ModalContainer';
import css from './modalCreateCategory.module.sass';

export default class ModalCreateCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      errorText: '',
    };
    this.inputCategoryName = React.createRef();
  }

  render() {
    const { onCreate, onClose } = this.props;
    return (
      <ModalContainer onClose={onClose}>
        <h1 className="title1">Create category</h1>
        <div className="form-group">
          <label className={css.label}>
            Category name
            <input
              type="text"
              ref={(ref) => { this.inputCategoryName = ref; }}
              className={`${css.inputText} form-control`}
            />
          </label>
        </div>
        <button
          onClick={() => { onCreate(this.inputCategoryName.value); onClose(); }}
          className="defaultButton btn btn-primary"
          type="button"
        >
          Create
        </button>
      </ModalContainer>
    );
  }
}
