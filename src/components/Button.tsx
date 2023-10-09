import styled from "styled-components";

interface ButtonProps {
    color: string,
    focus?: boolean,
}

const StyledButton = styled.button<ButtonProps>`
    border: none;
    background-color: ${props => props.color};
    color: #fff;
    opacity: ${props => props.focus ? 1 : .5};
    font-size: 20px;
    padding: 12px 12px 6px;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`

export default StyledButton;