import styled from 'styled-components'

export const StyledAuth = styled.div`
  display: flex;
  justify-content: space-around;

  form {
    width: 100%;
    max-width: 600px;
    padding: 20px 0;

    .fieldBox {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      width: 100%;

      label {
        margin-bottom: 5px;
        margin-left: 3px;
        font-size: 17px;
      }

      span {
        font-size: 0.7rem;
        color: orangered;
        width: 100%;
        margin-left: 3px;
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
    }

    button {
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