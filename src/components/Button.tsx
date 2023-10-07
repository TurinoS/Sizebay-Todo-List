import styled from "styled-components";

interface ButtonProps {
    color: string,
    opacity?: number,
}

const StyledButton = styled.button<ButtonProps>`
    border: none;
    background-color: ${props => props.color};
    color: #fff;
    opacity: ${props => props.opacity};
    font-size: 20px;
    padding: 12px 12px 6px;
    cursor: pointer;
`

export default StyledButton;