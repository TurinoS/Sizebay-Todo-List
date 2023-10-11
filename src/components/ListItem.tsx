import styled from "styled-components";
import StyledButton from "./Button";
import { AiFillMinusCircle, AiFillCheckCircle, AiFillEdit } from 'react-icons/ai'
import { useContext, useState } from "react";
import { AppContext, TaskType } from "../context/AppContext";
import TextInput from "./TextInput";

const StyledItem = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 43px;
    padding-left: 12px;
    border: 1px solid #bbb;
    border-radius: 8px;
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

    & .editInput {
        width: 100%;
        left: 0;
    }
`

export default function ListItem( task: TaskType) {
    const { toggleItemStatus, deleteTask, reRender, setReRender } = useContext(AppContext);
    const [options, setOptions] = useState(false);
    const [edit, setEdit] = useState(false);

    return(
        <StyledItem onClick={() => setOptions(!options)}>
            {edit ? 
                <div className="editInput">
                    <TextInput placeholder="Nova item..." editInput={true} task={task} submit={() => setEdit(false)}><AiFillEdit /></TextInput>
                </div> 
            :
                <>
                    {task.item}
                    {options &&
                        <div>
                            <StyledButton color="#848484" onClick={() => {setEdit(true)}}><AiFillEdit /></StyledButton> 
                            <StyledButton color="#E34F4F" onClick={() => {deleteTask(task.id); setReRender(!reRender)}}><AiFillMinusCircle /></StyledButton>
                            <StyledButton color="#5DE290" onClick={() => {toggleItemStatus(task.id); setReRender(!reRender)}}><AiFillCheckCircle /></StyledButton> 
                        </div>   
                    }
                </>
            }
        </StyledItem>
    )
}