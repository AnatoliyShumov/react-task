import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import PropTypes from "prop-types";
// import styled from 'styled-components/macro';
import styled from 'styled-components';
import renderField from './renderFileInput'
import Popup from './Popup'
import validate from './validate'

class RegisterNewUser extends Component {
    static propTypes = {
        mimeType: PropTypes.string,
        maxWeight: PropTypes.number,
        maxWidth: PropTypes.number,
        maxHeight: PropTypes.number,
    };
    static defaultProps = {
        mimeType: "image/jpeg",
        maxWeight: 3000,
        maxWidth: 3000,
        maxHeight: 3000,
        checkbox: 'default'
    };

    handleChange = (event, input) => {
        event.preventDefault();
        let imageFile = event.target.files[0];
        if (imageFile) {
            const localImageUrl = URL.createObjectURL(imageFile);
            const imageObject = new window.Image();

            imageObject.onload = () => {
                imageFile.width = imageObject.naturalWidth;
                imageFile.height = imageObject.naturalHeight;
                input.onChange(imageFile);
                URL.revokeObjectURL(imageFile);
            };
            imageObject.src = localImageUrl;
            // this.handlePreview(localImageUrl);
        }
    };
    validateImageWeight = imageFile => {
        if (imageFile && imageFile.size) {
            // Get image size in kilobytes
            const imageFileKb = imageFile.size / 1024;
            const { maxWeight } = this.props;

            if (imageFileKb > maxWeight) {
                return `Image size must be less or equal to ${maxWeight}kb`;
            }
        }
    };
    validateImageWidth = imageFile => {
        if (imageFile) {
            const { maxWidth } = this.props;

            if (imageFile.width > maxWidth) {
                return `Image width must be less or equal to ${maxWidth}px`;
            }
        }
    };
    validateImageHeight = imageFile => {
        if (imageFile) {
            const { maxHeight } = this.props;

            if (imageFile.height > maxHeight) {
                return `Image height must be less or equal to ${maxHeight}px`;
            }
        }
    };
    validateImageFormat = imageFile => {
        if (imageFile) {
            const { mimeType } = this.props;
            if (!mimeType.includes(imageFile.type)) {
                return `Image mime type must be ${mimeType}`;
            }
        }
    };
    render () {
        const {handleSubmit, mimeType, closePopup, setSkrollRef} = this.props;
        return (
            <Wrapper ref={section => setSkrollRef(section, "RegisterNewUser")}>
                <ContentWrapper>
                    <h2>Register to get a work</h2>
                    <h5>Attention! After successful registration and alert, update the list of users in the block from the top</h5>
                    <form onSubmit={handleSubmit}>
                            <FormWrapper>
                                <Field
                                name="name"
                                component={renderField}
                                type="text"
                                placeholder="Your name"
                                label="Name"
                                />
                                <Field
                                    name="email"
                                    component={renderField}
                                    type="email"
                                    placeholder="Your email"
                                    label="Email"
                                />
                                <Field
                                    name="phone"
                                    component={renderField}
                                    type="tel"
                                    placeholder="+38 (___) ____ __ __"
                                    label="Phone"
                                />
                                <Field name="position_id" component={renderField} type="checkbox" placeholder="Select your position"  label="Select">
                                    <option value="default">Select your position</option>
                                    <option value="1">Security</option>
                                    <option value="2">Designer</option>
                                    <option value="3">Content manager</option>
                                    <option value="4">Lawyer</option>
                                </Field>
                                <Field
                                    name="photo"
                                    type="file"
                                    validate={[
                                        this.validateImageWeight,
                                        this.validateImageWidth,
                                        this.validateImageHeight,
                                        this.validateImageFormat
                                    ]}
                                    mimeType={mimeType}
                                    component={renderField}
                                    handleChange={this.handleChange}
                                />
                            </FormWrapper>
                        <Button type="submit" label="submit">Sign Up</Button>
                    </form>
                </ContentWrapper>
                {this.props.showPopup.showPopup ?
                    <Popup
                        closePopup={closePopup}
                    />
                    : null
                }
            </Wrapper>
        );
    }
}

RegisterNewUser = reduxForm ({
    form: 'login',
    validate,

}) (RegisterNewUser);
const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Wrapper = styled.div`
   margin-top: 100px;
   position: relative;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 930px;
  margin: -36px auto auto auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 730px;
    margin: -8px auto auto auto;
  }
  @media all and (max-width: 767px) {
    max-width: 290px;
    margin: -56px auto auto auto;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14px;
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-top: 4px;
    }
    @media all and (max-width: 767px) {
      margin-top: -12px;
    }
  }

  h5{
    margin-top: -19px;
    @media (min-width: 768px) and (max-width: 1024px) {
      padding: 0 185px;
      margin-top: -10px;
    }
    @media all and (max-width: 767px) {
      text-align: center;
      margin-top: -10px;
    }
  }
`;
const Button = styled.button`
   width: 31%;
      margin-top: -11px;
      height: 38px;
      background-color: #d7d7d7;
      font-size: 20px;
      font-weight: bold;
      color: #8d8c8c;
      border-radius: 4px;
      font-family: SourceSansProBold;
      @media (min-width: 768px) and (max-width: 1024px) {
        width: 40%;
      }
      @media all and (max-width: 767px) {
        width: 100%;
      }
`;
export default RegisterNewUser;