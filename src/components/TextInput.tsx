import styled from "styled-components"
import StyledButton from "./Button"
import { ReactNode, useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

type InputProps = {
    placeholder: string,
    children: ReactNode,
    onBlur?: () => void,
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

export default function TextInput({ placeholder, children, onBlur }: InputProps) {
    const { addNewItem, setEdit } = useContext(AppContext)
    const [newItem, setNewItem] = useState('');
    const [onFocus, setOnFocus] = useState(false);

    return(
        <AddInput onSubmit={() => {addNewItem(newItem); setEdit(false)}}>
            <input type="text" placeholder={placeholder} value={newItem} onChange={(e) => setNewItem(e.target.value)} onFocus={() => setOnFocus(true)} onBlur={() => {setOnFocus(false); onBlur && onBlur()}}/>
            <StyledButton color="#4DA6B3" type="submit" focus={onFocus}>{children}</StyledButton>
        </AddInput>
        
    )
}