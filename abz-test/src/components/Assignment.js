// import styled from 'styled-components/macro';
import styled from 'styled-components';
import banner from '../img/banner/bg-1.jpg'
import React from 'react';
import scrollToComponent from "react-scroll-to-component";

const Assigment = ({setSkrollRef, refsForScroll}) => {
    const desctopText = <p>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</p>;
    const mobileText = <p>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. </p>;
    const scrollTo = section => {
        if (refsForScroll && refsForScroll[section]) {
            scrollToComponent(refsForScroll[section], {
                offset: -20, align: 'top', duration: 500, ease: 'inCirc'
            });
        }
    };
    return (
        <Wrapper ref={section => setSkrollRef(section, "Assigment")}>
            <ContentWrapper>
                <div>
                    <h1>Test assignment for Frontend Developer position</h1>
                    {window.innerWidth <= 767 ? mobileText : desctopText}
                    <Button onClick={() => scrollTo('RegisterNewUser')}>Sign Up</Button>
                </div>
            </ContentWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 930px;
  min-height: 630px;
  margin: auto;
  padding-top: 155px;
  color: #fff;
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 730px;
    min-height: 538px;
    padding-top: 143px;
  }
  @media all and (max-width: 767px) {
    max-width: 290px;
    min-height: 350px;
    padding-top: 107px;
   }
  div{
    max-width: 450px;
    margin-left: 4px;
    @media (min-width: 768px) and (max-width: 1024px) {
      max-width: 410px;
    }
    @media all and (max-width: 767px) {
      max-width: 410px;
    }
    h1{
      @media all and (max-width: 767px) {
        text-align: center;
      }
    }
    p{
      margin-top: -9px;
      word-spacing: 8px;
      @media (min-width: 768px) and (max-width: 1024px) {
        margin-top: -6px;
      }
      @media all and (max-width: 767px) {
        margin-top: -13px;
        text-align: center;
      }
    }
  };
`;
const Button = styled.button`
  width: 63%;
  height: 37px;
  margin-top: 24px;
  font-family: SourceSansProBold;
  font-size: 20px;
  background-color: #ef6c00;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 71%;
    margin-top: 17px;
  }
  @media all and (max-width: 767px) {
    width: 100%;
    margin-top: 26;
  }
`;
export default Assigment