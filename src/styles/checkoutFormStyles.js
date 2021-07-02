import styled from 'styled-components';
import { Form, Box, Button, RadioButtonGroup } from 'grommet';

const Title = styled.h1`
    width: 80%;
    height: 50px;
    font-size: 28px;
    text-align: left;
    margin-top: 50px;
`
const BoxButton = styled(Box)`
    margin-top: 20px;
`
const MyButton = styled(Button)`
    background: #184059;
    border: none;
    :hover{
        box-shadow: 0px 0px 0px 2px #d98d30;
    }
`
const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px 0;
`
const MyForm = styled(Form) `
    width: 80%;
`
const OptionsPayment = styled(RadioButtonGroup)`
    svg{
        fill: #d98d30;
    }
    label{
        div{
           div{
            border: solid 2px #d98d30;
            } 
        }
    }
    width: 80%;
    margin: 10px 0 30px 20px;
`
export {Title, BoxButton, MyButton, Container, MyForm, OptionsPayment}