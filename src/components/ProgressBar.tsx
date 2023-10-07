import styled from "styled-components"

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
`

export default function ProgressBar({ progress }: ProgressProps) {
    return(
        <TotalProgress>
            <CurrentProgress progress={progress} />
        </TotalProgress>
    )
}