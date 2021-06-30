import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import UserContext from "../context/UserContext"
import axios from "axios"
import CartList from "../components/CartList"
import { Link, useHistory } from "react-router-dom"


export default function Cart () {

    const [cart, setCart] = useState()
    const history = useHistory()
    //const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        const config = {headers: {"Authorization": `Bearer teste`}}
        const promise = axios.get('http://localhost:4000/cart', config)
        promise.then(response => {
            setCart(response.data)
        })
    }
    , [])

    function finishOrder () {
        history.push('/checkout')
    }

    return (
        <>
        <Container>
            <h1>Carrinho</h1>
            {cart
                ? cart.lenght
                    ?   <>
                        <Products>
                            <CartList cart={cart} setCart={setCart}/>
                        </Products>
                        <Button onClick = {finishOrder}><button>Finalizar pedido</button></Button>
                        </>
                    :   <>
                            <h2>Seu carrinho está vazio</h2>
                            <Link to="/home">
                                <p>Voltar para a página inicial</p>
                            </Link>
                    </>
                : <> </>
            }
        </Container>
        </>
    )
}


const Container = styled.div`
    width: 100%;
    margin-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        width: 80%;
        height: 50px;
        font-size: 40px;
    }
    h2 {
        width: 80%;
        height: 50px;
        font-size: 18px;
        background: #dbdbdb;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0 20px 0;
    }
    p {
        cursor: pointer
    }
`

const Products = styled.div `
    width: 80%;
`

const Button = styled.div`
    width: 80%;
    height: 60px;
    border: 1px solid #d3d3d3;
    border-top: none;
    position: relative;
    button {
        width: 200px;
        height: 40px;
        position: absolute;
        right: 15px;
        top: 10px;
        border: none;
        border-radius: 5px;
        background: #d98d30;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
    }
`