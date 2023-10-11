import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  background-color: #fff;
  border-radius: 40px;
  padding: 3em 5em;
  margin: 2em 18em;

  @media (max-width: 1300px) {
    margin: 2em 14em;     
  }

  @media (max-width: 1000px) {
    margin: 2em 10em;     
  }

  @media (max-width: 900px) {
    margin: 2em;     
  }

  @media (max-width: 500px) {
    padding: 2em;     
  }

  @media (max-width: 400px) {
    margin: .5em;
    border-radius: 20px;
    padding: 1em;
  }
`
