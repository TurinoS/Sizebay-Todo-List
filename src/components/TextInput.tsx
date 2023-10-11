import styled from "styled-components"
import StyledButton from "./Button"
import { ReactNode, useContext, useState } from "react"
import { AppContext, TaskType } from "../context/AppContext"

type InputProps = {
    placeholder: string,
    children: ReactNode,
    editInput?: boolean,
    task?: TaskType,
    submit?: () => void,
}

const AddInput = styled.form`
    display: flex;
    border: 1px solid #bbb;
    border-radius: 8px;
    overflow: hidden;

    & input {
        border: none;
        outline: none;
        padding: 8px 12px;
        color: #666;
        background-color: #f7f7f7;
        width: 100%;
    }
`

export default function TextInput({ placeholder, children, editInput, task, submit }: InputProps) {
    const { addNewItem, setEdit, editTaskText, reRender, setReRender } = useContext(AppContext)
    const [newTask, setNewTask] = useState('');
    const [onFocus, setOnFocus] = useState(false);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(editInput && task) {
            newTask.length > 0 && editTaskText(task.id, newTask)
        } else {
            newTask.length > 0 && addNewItem(newTask); setNewTask('');
        }

        if(submit) submit();
        
        setReRender(!reRender);
        setEdit(false);
    }

    return(
        <AddInput onSubmit={(e) => {handleOnSubmit(e)}}>
            <input type="text" placeholder={placeholder} value={newTask} onChange={(e) => setNewTask(e.target.value)} onFocus={() => setOnFocus(true)} onBlur={() => {setOnFocus(false)}}/>
            <StyledButton color="#4DA6B3" type="submit" focus={onFocus}>{children}</StyledButton>
        </AddInput>
    )
}