import { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import {Title, BoxButton, MyButton, Container} from "../styles/checkoutFormStyles.js"
import SelectPayment from '../components/SelectPayment';
import axios from 'axios';

export default function UserData () {

    const [titleAddress, setTittleAddress] = useState()
    const [address, setAddress] = useState()
    const [CPF, setCPF] = useState()
    const [cardNumber, setCardNumber] = useState()
    const [cardName, setCardName] = useState()
    const [cardValidity, setCardValidity] = useState()
    const [payment, setPayment] = useState()
    const nameAddress = ["titleAddress","address", "CPf"]
    const namePayment = ["cardNumber", "cardName", "cardValidity"]
    const inputsAddress = ["Título do endereço", "Endereço", "CPF"]
    const inputsPayment = ["N° do cartão", "Nome no cartão", "Validade"]
    const statesAddress = [setTittleAddress, setAddress, setCPF]
    const statesPayment = [setCardNumber, setCardName, setCardValidity]

    function save () {
        const body = {titleAddress, address, CPF}
        const config = {headers: {"Authorization": `Bearer teste`}}
        axios.post('http://localhost:4000/useraddress', body, config)
    }
    function finishOrder () {

    }

    return (
        <Container>
            <Title>Dados da entrega</Title>
            <CheckoutForm
                onSubmit={save}
                titles={inputsAddress}
                names={nameAddress}
                states={statesAddress}
            />

            <Title>Método de pagamento</Title>
            <SelectPayment setPayment={setPayment} payment={payment}/>
            {payment === "Cartão de crédito"
            ?   <CheckoutForm
                onSubmit={event => console.log(event)}
                titles={inputsPayment}
                names={namePayment}
                states={statesPayment}
                />
            :   <> </>}
            <BoxButton direction="row" gap="medium">
                <MyButton onClick={finishOrder} primary label="Finalizar" />
            </BoxButton>
        </Container>
    );
}

