import styled from "styled-components"
import { AiFillPlusCircle } from 'react-icons/ai'
import StyledButton from "./Button"

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
    return(
        <AddInput>
            <input type="text" placeholder="Adicionar item..." />
            <StyledButton color="#4DA6B3" opacity={.75}>{<AiFillPlusCircle />}</StyledButton>
        </AddInput>
        
    )
}