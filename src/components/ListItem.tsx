import styled from "styled-components";
import StyledButton from "./Button";
import { AiFillMinusCircle, AiFillCheckCircle, AiFillEdit } from 'react-icons/ai'
import { useContext, useState } from "react";
import { AppContext, TaskType } from "../context/AppContext";

const StyledItem = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 43px;
    padding-left: 12px;
    border: 1px solid #bbb;
    border-radius: 4px;
    color: #555;
    background-color: #f0f0f0;
    margin: 0 .25em .75em 0;

    :last-child {
        margin-bottom: 0;
    }

    & div {
        position: absolute;
        width: 132px;
        left: calc(100% - 132px);
    }
`

export default function ListItem( task: TaskType) {
    const { toggleItemStatus } = useContext(AppContext);
    const [edit, setEdit] = useState(false);

    return(
        <StyledItem onClick={() => setEdit(!edit)}>
            {task.item}
            {edit &&
                <>
                    <div>
                        <StyledButton color="#848484" onClick={() => toggleItemStatus(task.id)}><AiFillEdit /></StyledButton> 
                        <StyledButton color="#E34F4F" onClick={() => console.log(!edit)}><AiFillMinusCircle /></StyledButton>
                        <StyledButton color="#5DE290" onClick={() => toggleItemStatus(task.id)}><AiFillCheckCircle /></StyledButton> 
                    </div>
                </>    
            }
        </StyledItem>
    )
}