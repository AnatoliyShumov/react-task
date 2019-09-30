// import styled from 'styled-components/macro';
import styled from 'styled-components';
import React from 'react';
import banner from '../img/banner/bg-2.jpg'
import img from '../img/acquainted/man-laptop-v1.svg'

const Requirements = ({setSkrollRef}) => {
    return (
        <Wrapper ref={section => setSkrollRef(section, "Requirements")}>
            <ContentWrapper>
                <h2>General requirements for the test task</h2>
                <Menu>
                    <div>
                        <p>Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.</p>
                        <p>
                            If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.</p>
                        <p>Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.</p>
                    </div>
                    <img src={img} alt="man_laptop"/>
                </Menu>
            </ContentWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 74px;
  }
  @media all and (max-width: 767px) {
    margin-top: 40px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //width: 50%;
  max-width: 930px;
  min-height: 661px;
  margin: auto;
  padding-top: 96px;
  color: #fff;
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 730px;
    padding-top: 79px;
    min-height: 799px;
   }
  @media all and (max-width: 767px) {
    max-width: 290px;
    padding-top: 43px;
    min-height: 989px;
  }
  h2{
    padding-left: 105px;
    @media (min-width: 768px) and (max-width: 1024px) {
       text-align: center;
       padding: 0 130px;
    }
    @media all and (max-width: 767px) {
      text-align: center;
      padding: 0;
    }
  }
  p{
    line-height: 22px;
    margin-top: 21px;
    margin-bottom: 21px;
    @media (min-width: 768px) and (max-width: 1024px) {
      margin: 0;
    }
    @media all and (max-width: 767px) {
      margin: 0;
      padding: 23px 0 0 0;
    }
  }
  
`;
const Menu = styled.div`
  display: flex;
  margin-top: -12px;
  @media (min-width: 768px) and (max-width: 1024px) {
      margin: 0;
  }
  @media all and (max-width: 767px) {
    flex-direction: column;
    margin: 0;
    div{
      order: 1;
      text-align: center;
    }
    img{
      height: 221px;
    }
  }
  
`;
export default Requirements;