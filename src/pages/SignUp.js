import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Harry from '../components/assets/Harry.png';
import Description from "../components/Login/Banner";
import { Container, Field, Input, Button } from "../components/Login/loginStyle";

export default function SingUP() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function SigningUp (e){
        e.preventDefault();

        const body = {
                        name, 
                        lastName, 
                        email, 
                        password, 
                        passwordConfirmation
                    }

        const request = axios.post(`${process.env.REACT_APP_HOST}/sign-up`, body);
        setLoading(true);
        request.then(() => {
            history.push("/");
            setLoading(false);
        });
        request.catch((resp) => {
            if (resp.response.status === 403){
                alert("Este usuário já é cadastrado!")
            } else {
                alert("Preencha todos os campos corretamente!")
            }
            setLoading(false);
        })
    }

    return(
        <Container>
            <Description>
            </Description>
            <Field>
                <form onSubmit={SigningUp}>
                    <img src={Harry} alt={"Harry"}/>
                    <h1>Are you a wizard?</h1>

                    <Input 
                        type="text" 
                        placeholder="name" 
                        onChange={(e)=> setName(e.target.value)} 
                        value={name} disabled={loading ? true : false} 
                    />

                    <Input 
                        type="text" 
                        placeholder="last name" 
                        onChange={(e)=> setLastName(e.target.value)} 
                        value={lastName} disabled={loading ? true : false} 
                    />

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

                    <Input 
                        type="password" 
                        placeholder="Password Confirmation" 
                        onChange={(e)=> setPasswordConfirmation(e.target.value)} 
                        value={passwordConfirmation} disabled={loading ? true : false} 
                    />
                    <Button  disabled={loading ? true : false} >Sign Up</Button>
                </form>
                <Link to={"/"}><p>First time? Create an account!</p></Link>
            </Field>
        </Container>
    );
}