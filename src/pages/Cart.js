import { useEffect, useState } from "react"
import axios from "axios"
import CartList from "../components/CartList"
import { Link, useHistory } from "react-router-dom"
import { Container, Products, Button } from "../styles/cartStyles"

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