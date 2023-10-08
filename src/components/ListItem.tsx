import styled from "styled-components";
import StyledButton from "./Button";
import { AiFillMinusCircle, AiFillCheckCircle } from 'react-icons/ai'
import { ReactNode, useState } from "react";

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
        width: 88px;
        left: calc(100% - 88px);
    }
`

export default function ListItem({ children }: {children: ReactNode}) {
    const [edit, setEdit] = useState(false);

    return(
        <StyledItem onClick={() => setEdit(!edit)}>
            {children}
            {edit &&
                <div>
                    <StyledButton color="#E34F4F" onClick={() => console.log(!edit)}><AiFillMinusCircle /></StyledButton>
                    <StyledButton color="#5DE290" onClick={() => console.log(edit)}><AiFillCheckCircle /></StyledButton> 
                </div>
            }
        </StyledItem>
    )
}