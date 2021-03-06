import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext"
import Description from "../components/Login/Banner";
import { Container, Fields, Input, Button } from "../components/Login/loginStyle";

export default function SingIn() {
    const { user,setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        if (user){
            history.push("/home");
            return ;
        }
    }, [])
    
    function SigningUp (e){
        e.preventDefault();

        const body = {
                        email, 
                        password
                    }

        const request = axios.post(`${process.env.REACT_APP_HOST}/sign-in`, body);
        setLoading(true);
        request.then((response) => {
            setUser(response.data);
            const loginSaved = JSON.stringify(response.data);
            localStorage.setItem("lastLogin", loginSaved);
            history.push("/home");
        });
        request.catch((resp) => {
            if(resp.response.status === 500) {
                alert('Esse email já está em uso');
            } else if (resp.response.status === 400){
                alert('Preencha todos os campos corretamente');
            } else {
                alert('Houve um erro ao realizar o login, tente novamente');
            }
            setLoading(false);
        })
    }

    return(
        <Container>
            <Description></Description>
            <Fields>
                <form onSubmit={SigningUp}>
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
                    <Button  disabled={loading ? true : false} >Sign In</Button>
                </form>
                <Link to={"/sign-up"}><p>First time? Create an account!</p></Link>
            </Fields>
        </Container>
    );
}