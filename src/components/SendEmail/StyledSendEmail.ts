import styled from 'styled-components'

export const StyledSendEmail = styled.div`
  display: flex;
  justify-content: space-around;
  
  form {
    width: 100%;
    max-width: 1000px;
    border-radius: 30px;
    
    .fieldBox {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      width: 100%;
      
      label {
        font-weight: bold;
        margin-bottom: 5px;
      }
      
      label.inner {
        font-weight: normal;
      }
      
      span {
        font-size: 0.7rem;
        color: orangered;
        width: 100%;
      }

      input {
        outline: none;
        border: 1px solid lightgray;
        padding: 7px;
        border-radius: 6px;
        transition: .1s;

        &:hover {
          border: 1px solid lightskyblue;
        }

        &:focus {
          border: 1px solid #0099ff;
        }
      }

      .DraftEditor-root {
        background: white;
        padding: 10px;
        border-radius: 4px;
        margin: 5px 0;
        
        span {
          color: black;
          font-size: 14px;
        }
      }
    }

    button {
      outline: none;
      border-radius: 4px;
      background: white;
      border: 0;
      color: black;
      cursor: pointer;
      transition: .3s;
      margin: 3px;

      &:hover {
        background: lightgray;
      }

      &:active {
        transform: scale(0.95);
      }
    }
    
    button.button {
      outline: none;
      border-radius: 4px;
      background: #1890ff;
      padding: 7px 20px;
      border: 0;
      color: white;
      cursor: pointer;
      transition: .3s;

      &:hover {
        background: #58abff;
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
`