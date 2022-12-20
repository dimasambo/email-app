import styled from 'styled-components'

export const StyledPaginationBox = styled.div`
  float: right;
  display: flex;
  gap: 10px;
  margin: 10px;
  
  button {
    .next:after {
      content: 'Next';
    }
    
    .prev:after {
      content: 'Prev';
    }
  }
`