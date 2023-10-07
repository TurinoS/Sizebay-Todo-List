import styled from "styled-components"
import { useState } from 'react'
import { BsCheckLg } from 'react-icons/bs' 

const FilterDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 36px;
    justify-content: space-between;

    & div {
        display: flex;
        gap: 12px;

        & button {
            color: #666;
            border: 1px solid #bbb;
            border-radius: 16px;
            padding: 6px 12px;
            cursor: pointer;
        }

        .selected {
            display: flex;
            align-items: center;
            gap: 4px;
            border-color: #3597b5;
            color: #3597b5;
            padding-left: 6px;
        }
    }

    & input {
        border: 1px solid #bbb;
        border-radius: 4px;
        padding: 0 12px;
        outline: none;
        color: #666;
    }
`

export default function Filter() {
    const [select, setSelect] = useState("done")

    return(
        <FilterDiv>
            <div>
                <button onClick={() => setSelect("done")} className={select === "done" ? "selected" : ""}>{select === "done" && <BsCheckLg />}Feito</button>
                <button onClick={() => setSelect("pending")} className={select === "pending" ? "selected" : ""}>{select === "pending" && <BsCheckLg />}Pendente</button>
            </div>
            <input type="text" placeholder="Procurar item" />
        </FilterDiv>
    )
}