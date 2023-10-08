import styled from "styled-components";
import ListItem from "./ListItem";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const StyledList = styled.ul`
  margin-top: 1em;
  height: 300px;
  overflow-y: auto;
  
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
  const { tasksList } = useContext(AppContext)

  return (
    <StyledList>
      {tasksList?.map((item) => (
        <ListItem>{item.item}</ListItem>
      ))}
    </StyledList>
  );
}
