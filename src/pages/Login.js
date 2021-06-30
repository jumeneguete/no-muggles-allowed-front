import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import Harry from '../components/assets/Harry.png'
import UserContext from "../context/UserContext";

export default function Login() {
    const { user,setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function SigningUp (e){
        e.preventDefault();

        const body = {email, password}

        const request = axios.post("http://localhost:4000/sign-in", body);
        setLoading(true);
        request.then((response) => {
            setUser(response.data)
            history.push("/home");
            setLoading(false);
        });
        request.catch((resp) => {
            if(resp.response.status === 500) {
                alert('Esse email já está em uso');
            } else if (resp.response.status === 400){
                alert('Preencha todos os campos corretamente');
            } else {
                alert('Houve um erro ao realizar o cadastro, tente novamente');
            }
            setLoading(false);
        })
    }

    return(
        <Container>
            <Banner>
            <h1>Potterhead,</h1>
            <h2>Welcome to our online shopping website,<br/>No muggles allowed, Lda tanks in advance for your visit. </h2>
            </Banner>
            <Fields>
                <form onSubmit={SigningUp}>
                    <img src={Harry} alt={"Harry"}/> 
                    <h1>Are you a wizard?</h1>
                    <Input 
                        type="email" 
                        placeholder="e-mail" 
                        onChange={(e)=> setEmail(e.target.value)} 
                        value={email} disabled={loading ? true : false} 
                    />

                    <Input 
                        type="password" 
                        placeholder="password" 
                        onChange={(e)=> setPassword(e.target.value)} 
                        value={password} disabled={loading ? true : false}  
                    />
                    <Button  disabled={loading ? true : false} >Sign Up</Button>
                </form>
                <Link to={"/sign-up"}><p>First time? Create an account!</p></Link>
            </Fields>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
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
    }
`;

const Banner = styled.div`
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
            font-size: 76px;
        }
        h2 {
            font-size: 23px;
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
    background-color: ${props => props.disabled ? "#3d3869" : "#3d3869"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    
    @media (max-width: 600px) {
        width: 90%;
    }
`;