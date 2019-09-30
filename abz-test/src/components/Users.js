import React, {Component} from 'react';
import * as actions from "../action/actions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
// import styled from 'styled-components/macro';
import styled from 'styled-components';

class User extends Component {
    render() {
        const {person, buttonDisabled, setSkrollRef} = this.props;
        const userInformation = person.map((i)=>{
            const {name, position, email, phone, photo, id} = i;
            return <Users key={`${id}`}>
                <img src={photo} alt={`user-${id}`}/>
                <div>
                    <h4>{name}</h4>
                    <p>{position}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
            </Users>
        });
        return (
            <Wrapper ref={section => setSkrollRef(section, "Users")}>
                <ContentWrapper>
                    <h2>Our cheerful users</h2>
                    <h5>Attention! Sorting users by registration date</h5>
                    <UsersBlock>
                        {userInformation}
                    </UsersBlock>
                    <Button buttonDisabled={buttonDisabled} onClick={() => this.props.actions.getPerson(false)}>Show more</Button>
                </ContentWrapper>
            </Wrapper>
        )
    }
}
function mapStateToProps(state, props) {
    return {
        person: state.people.person
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const Wrapper = styled.div`

`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 930px;
  padding: 0 50px;
  margin: 96px auto auto auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 730px;
    margin: 75px auto auto auto;
   }
  @media all and (max-width: 767px) {
    max-width: 290px;
    margin: 42px auto auto auto;
    padding: 0 10px;
  }
  h5{
      margin-top: -18px;
      text-align: center;
      @media all and (max-width: 767px) {
        margin-top: 0px;
        padding: 0 61px;
      }
    }
`;
const UsersBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 29px;
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-top: 10px;
    }
    @media all and (max-width: 767px) {
     justify-content: center;
     margin-top: 4px; 
    }
`;
const Users = styled.div`
  display: flex;
  width: 290px;
  padding-bottom: 110px;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 184px;
    padding-bottom: 63px;
  }
  @media all and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    width: 184px;
    padding-bottom: 29px;
  }
  div{
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-left: 8px;
    @media (min-width: 768px) and (max-width: 1024px) {
      align-items: center;
    }
    @media all and (max-width: 767px) {
      align-items: center;
    }
    p{
      font-size: 14px;
      line-height: 18px;
      margin:0;
    }
    h4{
      margin-top: 21px;
      margin-bottom: 8px;
      @media (min-width: 768px) and (max-width: 1024px) {
        margin-top: 11px;
        text-align: center;
      }
      @media all and (max-width: 767px) {
       margin-top: 11px;
       text-align: center;
      }
    }
    p,h4{
      //white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  img{
      width: 69px;
      height: 69px;
      border-radius: 40px;
      padding-left: 4px;
    }
`;
const Button = styled.button`
    position: relative;
    top: -51px;
    width: 31%;
    height: 38px;
    font-size: 20px;
    font-weight: bold;
    font-family: SourceSansProBold;
    border: 2px solid #ef6c00;
    border-radius: 4px;
    background: none;
    color: #ef6c00;
    display: ${props => props.buttonDisabled === true ? 'none': 'block'};
    @media (min-width: 768px) and (max-width: 1024px) {
      top:-6px;
      width: 43%;
    }
    @media all and (max-width: 767px) {
      top:0;
      width: 100%;
    }
`;

export default connect(mapStateToProps, mapDispatchToProps)(User);