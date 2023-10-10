import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-transform: capitalize;
  color: #666;

  & div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    & h1 {
      font-size: 50px;
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
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "short" });
  const year = currentDate.getFullYear();
  const dayOfWeek = currentDate.toLocaleString("default", { weekday: "long" });

  return (
    <Header>
      <div>
        <h1>{day}</h1>
        <p>{month}</p>
        <p>{year}</p>
      </div>
      <h2>{dayOfWeek}</h2>
    </Header>
    )
}