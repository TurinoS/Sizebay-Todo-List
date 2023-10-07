import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #666;

  & div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    & h1 {
      font-size: 40px;
      grid-row: 1 / 3;
      line-height: 40px;
    }

    & p {
      grid-column: 2;
      text-align: start;
      line-height: 10px;
    }
  }
`

export default function HeaderDate() {
    return(
        <Header>
            <div>
            <h1>07</h1>
            <p>Jul</p>
            <p>2021</p>
            </div>
            <h2>Quarta-feira</h2>
        </Header>
    )
}