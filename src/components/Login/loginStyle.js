import styled from 'styled-components';

const DescriptionStyle = styled.div`
    width: 50%;
    padding-left: 25px;
    background-color: #3d3869;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 600px) {
        width: 100%;
        padding: 20px;
        text-align: center;
    }
    h1 {
        font-family: 'Passion One', sans-serif;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
    }
    h2 {
        font-family: 'Oswald', sans-serif;
        color: #fff;
        font-size: 38px;
        font-weight: bold;
    }
    @media (max-width: 600px) {
        h1 {
            font-size: 26px;
        }
        h2 {
            font-size: 20px;
        }
    }
`;

const Container = styled.div`
    height: 100vh;
    display: flex;
    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        background-color: #3d3869;
    }
`;

const Fields = styled.div`
    width: 50%;
    background-color: #ffba33;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        width: 100%;
        margin: 20px auto 0 auto;
    }
    form {
        width: 40%;
        height: 345px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    h1{
        font-family: 'Harry Potter', sans-serif;
        margin-bottom: 20px;
        color: #d98d30;
        font-size: 20px;
        
    }
    img{
        width: 90px;
        margin-bottom: 20px;
    }
    p{
        font-size: 15px;
        font-family: "Lato", sans-serif;
        color: #fff;
        letter-spacing: 1px;
        text-decoration: underline;
        margin-top: 5px;
    }
    p:hover {
        color: rgba(250, 250, 250, 0.8)
    }
    @media (max-width: 600px) {
        p{
            margin-top: 13px;
        }
        form{
            background-color: #ffba33;
            width: 80%;
            margin-bottom: 2px;
        }
        Link{
            margin-bottom: 10px;
        }
        
    }
`;

const Input = styled.input`
    width: 80%;
    height: 45px;
    padding-left: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    @media (max-width: 600px) {
        width: 90%;
    }
    &::placeholder{
            font-family: "Oswald", sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #9F9F9F;
        }
        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
`;

const Button = styled.button`
    width: 80%;
    height: 45px;
    color: #fff;
    font-family: "Oswald", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;;
    margin-bottom: 5px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.disabled ? "#ffba33" : "#3d3869"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    
    @media (max-width: 600px) {
        width: 90%;
    }
`;

const Field = styled.div`
    width: 50%;
    background-color: #ffba33;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        width: 100%;
        margin: 20px auto 0 auto;
    }
    form {
        width: 40%;
        height: 345px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    h1{
        font-family: 'Harry Potter', sans-serif;
        margin-bottom: 20px;
        color: #d98d30;
        font-size: 20px;
        
    }
    img{
        width: 90px;
        margin-bottom: 20px;
    }
    p{
        font-size: 15px;
        font-family: "Lato", sans-serif;
        color: #fff;
        letter-spacing: 1px;
        text-decoration: underline;
        margin-top: 5px;
    }
    p:hover {
        color: rgba(250, 250, 250, 0.8)
    }
    @media (max-width: 600px) {
        p{
            margin-top: 13px;
        }
        form{
            background-color: #ffba33;
            width: 80%;
            margin-bottom: 2px;
        }
        Link{
            margin-bottom: 10px;
        }
        img{
            margin-top: 5px;
        }
        
    }
`;


export { DescriptionStyle, Container, Input, Fields, Button, Field };