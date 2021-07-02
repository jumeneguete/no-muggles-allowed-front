import axios from "axios"

export default function SaveAddress (props) {

    const {titleAddress, address, CPF, setDisabled, user, setAddress} = props

    setDisabled(true)
    const body = {titleAddress, address, CPF}
    const config = {headers: {"Authorization": `Bearer ${user.token}`}}
    const promise = axios.post(`${process.env.REACT_APP_HOST}/useraddress`, body, config)
    promise.then(() => {
        console.log("Rodou essa porra")
        setDisabled(false)
        setAddress(address)
    })

    promise.catch(e => {
        setDisabled(false)
        if(e.response.status === 409) return alert("Endereço já cadastrado");
        if(e.response.status === 500) return alert("Falha no cadastro, tente novamente");
    })
}
