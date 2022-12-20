import styled, {css} from 'styled-components'

const size = {
    mobile500: "500px"
}

const mobile500 = (inner: any) => css`
  @media (max-width: ${size.mobile500}) {
    ${inner};
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #001529;
  padding: 10px 50px;
  color: white;

  .logoName {
    font-family: 'Gilroy', Arial;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    ${mobile500(css`
      font-size: 25px;
      line-height: 30px;
    `)};
  }

  .infoWrapper {
    display: flex;
    align-items: center;

    ${mobile500(css`
      flex-direction: column;
    `)};

    .userInfo {
      display: flex;
      flex-direction: column;
      margin-right: 20px;

      .email {
        ${mobile500(css`
          display: none;
        `)};
      }
    }

    a {
      text-decoration: none;
      color: white;

      .logOutButton {
        width: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 30px;
        background: #3588d3;
        padding: 5px;
        margin-left: 15px;
        transition: .1s;
      }

      &:hover {
        color: lightgray;
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
`