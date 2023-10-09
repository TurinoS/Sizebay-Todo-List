import { useContext } from "react";
import styled from "styled-components"
import { AppContext } from "../context/AppContext";

interface ProgressProps {
    progress: number,
}

const TotalProgress = styled.div`
    background-color: #bbb;
    border-radius: 2px;
    height: 16px;
`

const CurrentProgress = styled.div<ProgressProps>`
    background-color: #50de7f;
    border-radius: 2px;
    height: 16px;
    width: ${props => props.progress}%;
    transition: 750ms;
`

export default function ProgressBar() {
    const { progress } = useContext(AppContext);

    return(
        <TotalProgress>
            <CurrentProgress progress={progress} />
        </TotalProgress>
    )
}