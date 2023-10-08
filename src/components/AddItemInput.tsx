import styled from "styled-components"
import { AiFillPlusCircle } from 'react-icons/ai'
import StyledButton from "./Button"
import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

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

export default function AddItemInput() {
    const { addNewItem } = useContext(AppContext)
    const [newItem, setNewItem] = useState('');

    return(
        <AddInput onSubmit={() => addNewItem(newItem)}>
            <input type="text" placeholder="Adicionar item..." value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
            <StyledButton color="#4DA6B3" type="submit" opacity={.75}>{<AiFillPlusCircle />}</StyledButton>
        </AddInput>
        
    )
}