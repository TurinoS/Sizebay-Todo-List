import styled from "styled-components"
import { useContext } from 'react'
import { BsCheckLg } from 'react-icons/bs' 
import { AppContext } from "../context/AppContext"

const FilterDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 36px;
    justify-content: space-between;

    & div {
        display: flex;
        gap: 12px;

        & button {
            background-color: #fff;
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
    const { setHandleSearch, setHandleFiltering, handleFiltering } = useContext(AppContext);

    return(
        <FilterDiv>
            <div>
                <button onClick={() => {handleFiltering === "done" ? setHandleFiltering('') : setHandleFiltering("done")}} className={handleFiltering === "done" ? "selected" : ""}>{handleFiltering === "done" && <BsCheckLg />}Feito</button>
                <button onClick={() => {handleFiltering === "pending" ? setHandleFiltering('') : setHandleFiltering("pending")}} className={handleFiltering === "pending" ? "selected" : ""}>{handleFiltering === "pending" && <BsCheckLg />}Pendente</button>
            </div>
            <input type="text" placeholder="Procurar item" onChange={(e) => setHandleSearch(e.target.value)} />
        </FilterDiv>
    )
}