import React, { Component } from 'react';
import ModalContainer from '../ModalContainer/ModalContainer';
import css from './modalCreateTopic.module.sass';

export default class ModalCreateTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      errorText: '',
    };

    this.inputTopicName = React.createRef();
    this.selectCategoryId = React.createRef();
    this.inputStart = React.createRef();
    this.inputFinish = React.createRef();
    this.inputCurrent = React.createRef();
  }

  render() {
    const { categories, onCreate, onClose } = this.props;
    const { inputTopicName } = this;
    return (
      <ModalContainer onClose={onClose}>
        <h1 className="title1">Create topic</h1>
        <div className="form-group">
          <label className={`${css.label} form-group`}>
            Topic name
            <input
              type="text"
              ref={(ref) => { this.inputTopicName = ref; }}
              className={`${css.inputText} form-control`}
            />
          </label>
          <label className={`${css.label} form-group`}>
            Category
            <select className={`${css.select} form-control`} ref={(ref) => { this.selectCategoryId = ref; }}>
              {categories.map(category => (
                <option value={category.id}>{category.title}</option>
              ))}
            </select>
          </label>
          <div className="row">
            <label className={`form-group col-lg-6 ${css.label}`}>
              Start
              <input
                type="text"
                ref={(ref) => { this.inputStart = ref; }}
                className={`${css.inputText} form-control`}
              />
            </label>
            <label className={`form-group col-lg-6 ${css.label}`}>
              Finish
              <input
                type="text"
                ref={(ref) => { this.inputFinish = ref; }}
                className={`${css.inputText} form-control`}
              />
            </label>
          </div>
          <label className="form-group" className={css.label}>
            Current
            <input
              type="text"
              ref={(ref) => { this.inputCurrent = ref; }}
              className={`${css.inputText} form-control`}
              defaultValue={0}
            />
          </label>
        </div>
        {this.state.error && <p className={css.errorText}>{this.state.errorText}</p>}
        <button
          onClick={() => {
            if (
              typeof this.inputTopicName.value === 'string'
              && this.inputTopicName.value
              && typeof this.selectCategoryId.value === 'string'
              && this.selectCategoryId.value
              && typeof +this.inputStart.value === 'number'
              && this.inputStart.value >= 0
              && typeof +this.inputFinish.value === 'number'
              && this.inputFinish.value > 0
              && typeof +this.inputCurrent.value === 'number'
              && this.inputCurrent.value >= 0
              && +this.inputStart.value < +this.inputFinish.value
            ) {
              onCreate(
                this.inputTopicName.value,
                this.selectCategoryId.value,
                this.inputStart.value,
                this.inputFinish.value,
                this.inputCurrent.value,
              );
              onClose();
            } else {
              this.setState({ error: true, errorText: 'There are some empty or incorrect fields.' });
            }
          }}
          className="defaultButton btn btn-primary"
          type="button"
        >
          Create
        </button>
      </ModalContainer>
    );
  }
}
