import { useState } from "react"

import {Name, Price, Img, OutlineX, Table, Title} from "../../styles/cartStyles"
import UpdateCart from "../../helpers/Cart/UpdateCart"

export default function CartList ({cart, setCart}) {

    const [quantity, setQuantity] = useState(1)
    //const {user, setUser} = useContext(UserContext)

    //function deleteItem (item) {
    //    let arr = cart
    //    setCart(arr.splice(item, 1))
    //}

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
                        <td onClick={() => {
                            //deleteItem(item)
                            UpdateCart(item)}}><OutlineX /></td>
                        <Img><img src="teste.png" alt='imagem do produto' /></Img>
                        <Name>{item.productname}</Name>
                        <td>R${item.price}</td>
                        <td>
                            <input  type="number" max={item.stock} min={1} 
                                    onChange={(event) => setQuantity(event.target.value)}
                                    value = {quantity} />
                        </td>
                        <Price>R${item.price*quantity}</Price>
                    </tr>
                    </>)}
                )
            }
            </tbody>
        </Table>
    )
}

