import { useContext, useState } from "react"

import {Name, Price, Img, OutlineX, Table, Title} from "../../styles/cartStyles"
import UpdateCart from "../../helpers/Cart/UpdateCart"
import UserContext from "../../context/UserContext"
import { useHistory } from "react-router-dom"

export default function CartList ({cart, setCart}) {

    const {user} = useContext(UserContext)
    const [quantity, setQuantity] = useState(1)
    const history = useHistory()

    console.log(cart)
    return (
        <Table>
            <Title>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>Produtos</td>
                <td>Preço</td>
                <td>Quantidade</td>
                <td>Subtotal</td>
            </Title>
            <tbody>
            {cart.map((item,index) => {
                return (
                    <>
                    <tr>
                        <td onClick={() => UpdateCart({item, user,cart, history})}><OutlineX /></td>
                        <Img> <img src={item.productImage}></img> </Img>
                        <Name>{item.productName}</Name>
                        <td>R${((item.salePrice ? item.salePrice : item.price)/1000).toFixed(2).replace(".", ",")}</td>
                        <td>
                            <input  type="number" max={item.stock} min={1} 
                                    onChange={(event) => setQuantity(event.target.value)}
                                    value = {quantity} />
                        </td>
                        <Price>R${(((item.salePrice ? item.salePrice : item.price)*quantity)/1000).toFixed(2).replace(".", ",")}</Price>
                    </tr>
                    </>)}
                )
            }
            </tbody>
        </Table>
    )
}

