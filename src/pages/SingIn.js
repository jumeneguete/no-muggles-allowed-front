import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import Harry from '../components/assets/Harry.png'
import UserContext from "../context/UserContext"
import Description from "../components/Login/Banner";
import { Container, Fields, Input, Button } from "../components/Login/loginStyle";

export default function SingIn() {
    const { user,setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function SigningUp (e){
        e.preventDefault();

        const body = {
                        email, 
                        password
                    }

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
            <Description></Description>
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