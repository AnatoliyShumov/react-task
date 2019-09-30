import React from 'react';
// import styled from 'styled-components/macro';
import styled from 'styled-components';
class Popup extends React.Component {
    render() {
        return (
            <PopupWrapper>
                <PopupInner>
                    <h4>Congratulations</h4>
                    <p>You have successfully passed the registration</p>
                    <Button onClick={this.props.closePopup}>OK</Button>
                </PopupInner>
            </PopupWrapper>
        );
    }
}

const PopupWrapper = styled.div`
  position: absolute;
    width: 100%;
    height: 681px;
    top: -28%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    @media all and (max-width: 767px) {
      width: 100%;
      height: 82%;
    }
`;

const PopupInner = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 39%;
  right: 39%;
  top: 36%;
  bottom: 38%;
  margin: auto;
  //border-radius: 20px;
  background: white;
  @media (min-width: 768px) and (max-width: 1024px) {
    left: 30%;
    right: 30%;
    top: 36%;
    bottom: 36%;
  }
  @media all and (max-width: 767px) {
    left: 5%;
    right: 5%;
    top: 54%;
    bottom: 14%;
  }
  h4{
    margin-top: 16px;
    margin-left: 17px;
  }
  p{
    margin-top: -20px;
    margin-left: 19px;
    font-size: 16px;
  }
`;
const Button = styled.button`
  align-self: flex-end;
  font-size: 20px;
  color: #ef6c00;
  background-color: white;
  border: none;
  margin-top: 13px;
  margin-right: 13px;
`;
export default Popup;