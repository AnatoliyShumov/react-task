// import styled from 'styled-components/macro';
import styled from 'styled-components';
import React from 'react';
import img from'../img/acquainted/man-mobile.svg'
import scrollToComponent from 'react-scroll-to-component';

const Acquainted = ({setSkrollRef, refsForScroll}) => {
    const scrollTo = section => {
        if (refsForScroll && refsForScroll[section]) {
            scrollToComponent(refsForScroll[section], {
                offset: -20, align: 'top', duration: 500, ease: 'inCirc'
            });
        }
    };
    return (
        <Wrapper ref={section => setSkrollRef(section, "Acquainted")}>
            <ContentWrapper>
                <h2>Let's get acquainted</h2>
                <Menu>
                    <img src={img} alt="man-laptop-v1"/>
                    <RightMenu>
                        <h3>I am cool frontend developer</h3>
                        <p>When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
                        <p>Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web. </p>
                        <div>
                            <a onClick={() => scrollTo('RegisterNewUser')} href="#">Sign Up</a>
                        </div>
                    </RightMenu>
                </Menu>
            </ContentWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 930px;
  margin: 95px auto 0 auto;
  //margin-top: 106px;
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 730px;
    margin: 75px auto 0 auto;
   }
  @media all and (max-width: 767px) {
   max-width: 290px;
   margin: 46px auto 0 auto;
  }
`;
const Menu = styled.div`
  display: flex;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 0;
    img{
      width: 224px;
    }
  }
  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 224px;
    }
  }
  
`;
const RightMenu = styled.div`
  margin-left: 31px;
  margin-top: -16px;
  margin-bottom: 0;
  @media all and (max-width: 767px) {
   margin: 0;
  }
  @media all and (max-width: 767px) {
   text-align: center;
  }
  h3{
    margin-bottom: 0;
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-bottom: 24px;
    }
    @media all and (max-width: 767px) {
      margin-bottom: auto;
      padding: 0 20px;
    }
  }
  p{
    font-size: 16px;
    line-height: 22px;
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-top: -12px;
      margin-bottom: 35px;
    }
    @media all and (max-width: 767px) {
      line-height: 22px;
    }
  }
  div{
  @media (min-width: 768px) and (max-width: 1024px) {
     margin-top: -17px;
  }
   a{
      color: #ef6c00;
      font-size: 22px;
      font-family: SourceSansProBold;
    }  
  }
  
`;

export default Acquainted;