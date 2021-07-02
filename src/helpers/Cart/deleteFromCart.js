export default function deleteFromCart ({index, cart, setCart}) {
    let arr = cart
    arr.splice(index, 1)
    setCart(arr)
}