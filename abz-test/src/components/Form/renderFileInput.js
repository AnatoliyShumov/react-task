import React from "react";
// import styled from 'styled-components/macro';
import styled from 'styled-components';
import caretImg from "../../img/icons/caret-down.svg";

const renderField = ({
                         input,
                         label,
                         type,
                         placeholder,
                         mimeType,
                         handleChange,
                         defaultValue,
                         meta: { touched, error, warning, },
                         children
                     }) => {
    if(type === "checkbox"){
        return <InputBox>
            <div>
                    <select defaultValue={defaultValue} {...input} placeholder={placeholder}  type={type} >
                        {children}
                    </select>
            </div>
            {touched &&
            ((error && <Error>{error}</Error>) )}
        </InputBox>
    }
    else if(type === "file"){
        return (
            <InputBox>
               <div>
                   <div>
                       <Label htmlFor={type}>Upload your photo</Label>
                   </div>
                   <div>
                       <p>Upload</p>
                       <input
                           name={input.name}
                           type={type}
                           accept={mimeType}
                           onChange={event => handleChange(event, input)}
                       />
                       {/*{console.log(error, warning, touched)}*/}
                   </div>
               </div>
                {touched ? ((error && <Error>{error}</Error>)) : <Error>File format jpg  up to 5 MB, the minimum size of 70x70px</Error>}
            </InputBox>)
    }
    else {
        return <InputBox>
            <div>
                <Label>{label}</Label>
                <input {...input} placeholder={placeholder} type={type} />
            </div>
            {touched &&
            ((error && <Error>{error}</Error>))}
        </InputBox>
    }
};
const InputBox = styled.div`
  :nth-child(-n+6){
    font-family: SourceSansPro;
    padding-bottom: 36px;
    @media all and (max-width: 767px) {
      padding-bottom: 15px;
    }
    input, select{
      font-size: 16px;
      outline: none;
      //color: #b7b7b7;
    }
  }
  :nth-child(1){
    width: 31%;
    @media all and (max-width: 767px) {
      width: 100%;
    }
    input{
      width: 100%;
      height: 57px;
      border: 1px solid #b7b7b7;
      border-radius: 4px;
      padding-left: 16px;
      box-sizing: border-box;
    }
  }
  :nth-child(2){
    width: 31%;
    @media all and (max-width: 767px) {
      width: 100%;
    }
    input{
      width: 100%;
      height: 57px;
      border: 1px solid #b7b7b7;
      border-radius: 4px;
      padding-left: 16px;
      box-sizing: border-box;
    }
  }
  :nth-child(3){
    width: 31%;
    @media all and (max-width: 767px) {
      width: 100%;
    }
    input{
      width: 100%;
      height: 57px;
      border: 1px solid #b7b7b7;
      border-radius: 4px;
      padding-left: 16px;
      box-sizing: border-box;
    }
  }
  :nth-child(4){
    width: 50%;
    @media all and (max-width: 767px) {
      width: 100%;
      padding-top: 20px;
    }
    div{
      display: flex;
      select{
        width: 100%;
        height: 57px;
        border: 1px solid #b7b7b7;
        border-radius: 4px;
        padding-left: 16px;
        //border-radius: 0;
        background: transparent;
        -webkit-appearance: none;
        box-sizing: border-box;
        @media all and (max-width: 767px) {
          position: relative;
        }
      }
      :after{
        content: url(${caretImg});
        display: flex;
        justify-content: flex-end;
        position: relative;
        top: 20px;
        left: -28px;
        z-index: -2;
        @media all and (max-width: 767px) {
          position: absolute;
          display: flex;
          left: 242px;
          right: 0;
          justify-content: center;
          padding-top: 17px;
          top: auto;
        }
      }
    }
    }
      
  }
  :nth-child(5){
     width: 48%;
     @media all and (max-width: 767px) {
      width: 100%;
      padding-top: 20px;
     }
     div{
      display: flex;
      width: 100%;
   
      div:nth-child(1){
        border: 1px solid #b7b7b7;
        border-radius: 4px;
        background-color: transparent;
        flex-grow: 1;
        height: 57px;
        label{
           background-color: transparent;
           left: 21px;
           top:20px;
           font-family: SourceSansPro;
           font-size: 16px;
         }
      }
      div:nth-child(2){
        display: flex;
        justify-content: center;
        width: 39%;
        position: relative;
        height: 57px;
        border: 2px solid #ef6c00;
        border-radius: 4px;
        @media (min-width: 768px) and (max-width: 1024px) {
          width: 61%;
        }
          p{
            position: absolute;
            color: #ef6c00;
            font-family: SourceSansProBold;
          }
          input{
            opacity: 0;
            width: 98%;
            height: 57px;
            border: 1px solid #b7b7b7;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 20px;
            font-weight: bold;
          }
        }
     } 
  }
`;
const Label = styled.label`
   position: relative;
   left: 15px;
   top:10px;
   background-color: #fff;
   color: #b7b7b7;
`;
const Error = styled.p`
 font-size: 12px;
 color: #b7b7b7;
 font-family: SourceSansPro;
 margin-top: -4px;
 margin-left: 16px;
`;

export default renderField;