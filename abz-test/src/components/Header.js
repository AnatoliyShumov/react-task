import React, {Component} from 'react';
// import styled from 'styled-components/macro';
import styled from 'styled-components';
import logo from '../img/logo/logo.svg'
import signOut from  '../img/icons/sign-out.svg'
import lineMenu from '../img/icons/line-menu.svg'
import scrollToComponent from 'react-scroll-to-component';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false,
        }
    }

    handleToggle = () => {
        this.setState(state => ({
            menuOpen: !state.menuOpen,
        }));
    };

    scrollTo = section => {
        const {refsForScroll} = this.props;
        if (refsForScroll && refsForScroll[section]) {
            scrollToComponent(refsForScroll[section], {
               offset: -20, align: 'top', duration: 500, ease: 'inCirc'
            });
        }
    };
    render() {
        const { menuOpen } = this.state;
        const {photo, email, position} = this.props.headerUser.headerUser;

        return(
            <Wrapper>
                <ContentWrapper>
                    <Logo>
                      <img src={logo} alt="Logo"/>
                    </Logo>
                    <MenuWrapper open={menuOpen}>
                        <MenuLink>
                            <a onClick={() => this.scrollTo('About')} href="#">About me</a>
                            <a onClick={() => this.scrollTo('Relationships')} href="#">Relationships  </a>
                            <a onClick={() => this.scrollTo('Requirements')} href="#">Requirements</a>
                            <a onClick={() => this.scrollTo('Users')} href="#">Users</a>
                            <a href="#" onClick={() => this.scrollTo('RegisterNewUser')}>Sign Up</a>
                            {window.innerWidth <= 1024 ? <a href="#">Sign Aut</a> : " "}
                        </MenuLink>
                        <User>
                            <div>
                                <p>{position}</p>
                                <p>{email}</p>
                            </div>
                            <img src={photo} alt="user"/>
                            <img src={signOut} alt="sign-out"/>
                        </User>
                    </MenuWrapper>
                    <Button onClick={this.handleToggle}><img src={lineMenu} alt="line-menu"/></Button>
                </ContentWrapper>
            </Wrapper>
        )
    }
}

// Styles
const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 111;
`;
const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    //position: relative;
    justify-content: space-between;
    max-width: 930px;
    height: 63px;
    margin: auto;
    @media (min-width: 768px) and (max-width: 1024px) {
      max-width: 730px;
    }
   @media all and (max-width: 767px) {
      max-width: 290px;
   }
`;
const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    a{
      font-size: 16px;
      padding-right: 28px;
      @media (min-width: 768px) and (max-width: 1024px) {
        padding-bottom: 24px;
      }
      @media all and (max-width: 767px) {
        padding-bottom: 24px;
      }
    }
  @media screen and (max-width: 1024px) {
    //Всі стилі на мобайл меню
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 250px;
    height: 1024px;
    position: absolute;
    top:0;
    left: ${props => props.open ? 0 : '-100%'};
    transition: 0.3s ease-in-out;
    background-color: #fff;
  }
`;
const MenuLink = styled.div`
 padding-top: 10px;
 @media (min-width: 768px) and (max-width: 1024px) {
  display: flex;
  flex-direction: column;
  order: 2;
  padding-top: 20px;
  padding-left: 23px;
 }
 @media all and (max-width: 767px) {
  display: flex;
  flex-direction: column;
  order: 2;
  padding-top: 20px;
  padding-left: 23px;
 }
`;
const Logo = styled.div`
  width: 23%;
   img{
     width: 139px;
   }
`;
const Button = styled.button`
  display: none;
  @media screen and (max-width: 1024px){
    display: flex;
    margin-left: auto;
  }
  @media all and (max-width: 767px) {
    display: flex;
    margin-left: auto;
  }
`;
const User = styled.div`
  display: flex;
  width: 32%;
  align-items: center;
  text-align: end;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    width: 100%;
    text-align: start;
    padding: 32px 12px;
  }
  @media all and (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    width: 100%;
    text-align: start;
    padding: 32px 12px;
  }
  div{
    overflow: auto;
  @media screen and (max-width: 1024px){
    padding-top: 13px;
    padding-left: 14px;
  }
  @media all and (max-width: 767px) {
     padding-top: 13px;
    padding-left: 14px;
  }
   p{
    font-size: 14px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p:nth-child(2){
    margin-top: -7px;
    color: #8d8c8c;
    @media screen and (max-width: 1024px){
      padding-top: 7px;
    }
   }
  }
 
  div + img{
    width: 41px;
    height: auto;
    border-radius: 23px;
    margin-left: 12px;
    @media (min-width: 768px) and (max-width: 1024px) {
     width: 68px;
     border-radius: 40px;
    }
    @media all and (max-width: 767px) {
     width: 68px;
     border-radius: 40px;
    }
  }
  img + img{
    width: 23px;
    margin-left: 12px;
    @media (min-width: 768px) and (max-width: 1024px) {
      display: none;
    }
    @media all and (max-width: 767px) {
      display: none;
    }
  }
`;

export default Header;

