import styled from "styled-components";
import ListItem from "./ListItem";

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
  return (
    <StyledList>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
      <ListItem>Drive a cadilac across de Irish Sea</ListItem>
    </StyledList>
  );
}
