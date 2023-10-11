import styled from "styled-components";
import ListItem from "./ListItem";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const StyledList = styled.ul`
  margin-top: 1em;
  height: 300px;
  overflow-y: auto;

  & p {
    text-align: center;
    margin-top: 1em;
  }
  
    ::-webkit-scrollbar {
        width: 9px;
        border-radius: 9px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 9px;
    }

    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        border-radius: 9px;
    }
`;

export default function ItemsList() {
  const { tasksList, handleFiltering } = useContext(AppContext)

  return (
    <StyledList>
      {tasksList.length > 0 ? tasksList.map((task) => (
        <ListItem key={task.id} id={task.id} item={task.item} status={task.status} />
      )) : handleFiltering === 'pending' ?
        <p>Lista vazia</p>
        :
        <p>Você ainda não completou nenhuma tarefa</p>
      }
    </StyledList>
  );
}
