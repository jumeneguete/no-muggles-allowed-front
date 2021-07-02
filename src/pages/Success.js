import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Success () {
    return (
        <Container>
        <div>
            <h1>You'll receive a owl very soon!</h1>
            <Link to="/home">
                <p>Voltar para a página inicial</p> 
            </Link>
        </div> 
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        text-align: center;
        font-size: 40px;
        margin-bottom: 30px;
    }
    p{
        font-size: 20px;
        text-align: center;
    }
`