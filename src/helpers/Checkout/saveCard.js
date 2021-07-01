import axios from "axios"

export default function saveCard ({cardNumber, cardName, cardValidity, setDisabled, setRenderCard}) {
    setDisabled(true)
    const validity = (new Date(cardValidity).toISOString().slice(0,10))
    console.log(validity)
    console.log(cardNumber)
    const body = {cardNumber, cardName, validity}
    const config = {headers: {"Authorization": `Bearer teste`}}
    const promise = axios.post('http://localhost:4000/savecard', body, config)
    promise.then(() => {
        setDisabled(false)
        setRenderCard(true)
    })
    promise.catch(e => {
        console.log(e.response)
        setDisabled(false)})
}