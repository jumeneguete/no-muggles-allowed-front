import styled from "styled-components"

export default function Button({children, type, disabled}) {
    return (
        <ButtonStyle type={type} disabled={disabled}>{children} </ButtonStyle>
    );
}

const ButtonStyle = styled.button`
    width: 90%;
    height: 40px;
    margin: 10px auto;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Oxygen', sans-serif;
    letter-spacing: 1px;
    color: #fff;
    background-color: #184059;
    text-align: center;

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
`;