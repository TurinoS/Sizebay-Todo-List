import styled from "styled-components"
import { AiFillPlusCircle } from 'react-icons/ai'

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

    & button {
        border: none;
        background-color: #4DA6B3;
        color: #fff;
        opacity: .75;
        font-size: 20px;
        padding: 8px 12px 4px;
        cursor: pointer;
    }
`

export default function AddItemInput() {
    return(
        <AddInput>
            <input type="text" placeholder="Adicionar item..." />
            <button>{<AiFillPlusCircle />}</button>
        </AddInput>
        
    )
}