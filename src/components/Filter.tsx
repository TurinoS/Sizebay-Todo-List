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
    const { setHandleFiltering, handleFiltering, filterPendingItems, filterDoneItems, searchFilter } = useContext(AppContext);

    return(
        <FilterDiv>
            <div>
                <button onClick={() => {handleFiltering === "done" ? setHandleFiltering('') : setHandleFiltering("done"); filterDoneItems()}} className={handleFiltering === "done" ? "selected" : ""}>{handleFiltering === "done" && <BsCheckLg />}Feitos</button>
                <button onClick={() => {handleFiltering === "pending" ? setHandleFiltering('') : setHandleFiltering("pending"); filterPendingItems()}} className={handleFiltering === "pending" ? "selected" : ""}>{handleFiltering === "pending" && <BsCheckLg />}Pendentes</button>
            </div>
            <input type="text" placeholder="Procurar item" onChange={(e) => searchFilter(e.target.value)} />
        </FilterDiv>
    )
}