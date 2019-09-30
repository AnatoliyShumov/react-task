import styled from 'styled-components';
// import styled from 'styled-components/macro';
import React from 'react';
import img_html from'../img/acquainted/html.svg'
import img_css from'../img/acquainted/css.svg'
import img_js from'../img/acquainted/javascript.svg'


const Relationships = ({setSkrollRef}) => {
    return (
        <Wrapper ref={section => setSkrollRef(section, "Relationships")}>
            <ContentWrapper>
                <h2>About my relationships with
                    web-development</h2>
                <Menu>
                    <MenuTechnologies>
                        <img src={img_html} alt="html"/>
                        <div>
                            <h3>I'm in love with HTML</h3>
                            <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</p>
                        </div>
                    </MenuTechnologies>
                    <MenuTechnologies>
                        <img src={img_css} alt="css"/>
                        <div>
                            <h3>CSS is my best friend</h3>
                            <p>Cascading Style Sheets (CSS)
                                is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
                        </div>
                    </MenuTechnologies>
                    <MenuTechnologies>
                        <img src={img_js} alt="js"/>
                        <div>
                            <h3>JavaScript is my passion</h3>
                            <p>JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
                        </div>
                    </MenuTechnologies>
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
  min-height: 605px;
  margin: 80px auto 0 auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 730px;
    margin: 102px auto 0 auto;
   }
  @media all and (max-width: 767px) {
    max-width: 290px;
    margin: 42px auto 0 auto;
  }
  h2{
    text-align: center;
    line-height: 48px;
    padding: 0 152px;
    @media (min-width: 768px) and (max-width: 1024px) {
      padding: 0 50px;
    }
    @media all and (max-width: 767px) {
      line-height: 32px;
      padding: inherit;
    }
  }
`;
const Menu = styled.div`
  display: flex;
  margin-top: 16px;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    margin-top: -4px;
  }
  @media all and (max-width: 767px) {
    flex-direction: column;
  }
  //justify-content: space-between;
 
`;
const MenuTechnologies = styled.div`
  max-width: 290px;
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    max-width: 595px;
    padding-bottom:35px;
  }
  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 14px;
  }
  img{
   @media (min-width: 768px) and (max-width: 1024px) {
     height: 100px;
     margin-top: 17px;
   }
   @media all and (max-width: 767px) {
    height: 100px;
    margin-top: -5px;
   }
  }
  div{
   @media (min-width: 768px) and (max-width: 1024px) {
     margin-top: -5px;
     padding-left: 39px;
   }
   @media all and (max-width: 767px) {
    text-align: center;
    margin-top: -9px;
   }
   h3{
    margin: 16px auto;
   }
   p{
    font-size: 16px;
    margin-top: -10px;
    line-height: 23px;
    }
  }
  &:nth-child(2){
    margin-left: 31px;
    margin-right: 31px;
    @media (min-width: 768px) and (max-width: 1024px) {
      margin: 0;
    }
    @media all and (max-width: 767px) {
      margin: 0;
    }
  }
  &:nth-child(3){
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-top: -17px;
    }
  }
`;
export default Relationships;