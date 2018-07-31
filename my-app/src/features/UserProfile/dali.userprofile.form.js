import React, { Component } from 'react';
import { FormGroup, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Field, Control, Form as ReactReduxForm, Errors } from 'react-redux-form';
import userProfileStore from './dali.userprofile.store';
import './dali.userprofile.css';

const isRequired = (val) => val && val.length > 5;

export class UserProfileForm extends Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    userProfileStore.dispatch({type: "CHANGE_NAME", payLoad: val.name});
    console.log(val);
  }
  
  render() {
      return (
        <Provider store={userProfileStore}>
          <ReactReduxForm model="dali_userprofileForm.user" onSubmit={(val) => this.handleSubmit(val)}>
            <FormGroup>
              <Field model="dali_userprofileForm.user.name" validators={{ isRequired }}>
                <label>First name: </label>
                <input type="text" />
                <br/>
                <Errors
                  className="error"
                  wrapper="span"
                  show={{ touched: true, focus: false }}
                  model="dali_userprofileForm.user.name"
                  messages={{
                    isRequired: 'Please provide a name longer than 5 chars.',
                  }}
                />
              </Field>
          </FormGroup>
          <ButtonGroup>
              <Control.button model="dali_userprofileForm.user" disabled={{ valid: false }} className="btn btn-primary">Update</Control.button>
              <Control.reset model="dali_userprofileForm.user" type="reset" className="btn btn-danger">Reset</Control.reset>
          </ButtonGroup>
          </ReactReduxForm>
        </Provider>
      );
    }
}

// UserProfileForm.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired
//   }).isRequired,
// };

export default connect()(UserProfileForm);