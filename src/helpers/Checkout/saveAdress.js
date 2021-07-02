import axios from "axios"

export default function saveAddress ({titleAddress, address, CPF, setDisabled, setRenderAddress}) {
    setDisabled(true)
    const body = {titleAddress, address, CPF}
    const config = {headers: {"Authorization": `Bearer test`}}
    const promise = axios.post('http://localhost:4000/useraddress', body, config)
    promise.then(() => {
        setDisabled(false)
        setRenderAddress(true)
    })
    promise.catch(e => {
        setDisabled(false)
        if(e.status === 409) return alert("Endereço já cadastrado");
        if(e.status === 500) return alert("Falha no cadastro, tente novamente");
    })
}
