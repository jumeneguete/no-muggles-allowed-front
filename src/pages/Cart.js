import { useContext, useEffect, useState } from "react"
import axios from "axios"
import CartList from "../components/Cart/CartList"
import { Link, useHistory } from "react-router-dom"
import { Container, Products, Button } from "../styles/cartStyles"
import UserContext from "../context/UserContext"

export default function Cart () {

    const [cart, setCart] = useState()
    const history = useHistory()
    const {user} = useContext(UserContext)

    useEffect(() => {
        const config = { headers: { "Authorization": `Bearer ${user.token}` }}
        const promise = axios.get(`${process.env.REACT_APP_HOST}/cart`, config)
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
                ? cart.length
                    ?   <>
                        <Products>
                            <CartList cart={cart} setCart={setCart}/>
                        </Products>
                        <Button onClick={finishOrder}><button>Finalizar pedido</button></Button>
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