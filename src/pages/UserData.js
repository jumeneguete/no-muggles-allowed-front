import { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import {Title, BoxButton, MyButton, Container} from "../styles/checkoutFormStyles.js"
import SelectPayment from '../components/SelectPayment';

export default function UserData () {

    const [value, setValue] = useState({});
    const [payment, setPayment] = useState()
    const inputsAddress = {input1: "Título do endereço", input2: "Endereço", input3: "CPF"}
    const inputsPayment = {input1: "N° do cartão", input2: "Nome no cartão", input3: "Validade"}

    return (
        <Container>
            <Title>Dados da entrega</Title>
            <CheckoutForm
            props={inputsAddress}
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {}} />

            <Title>Método de pagamento</Title>
            <SelectPayment setPayment={setPayment} payment={payment}/>
            {payment === "Cartão de crédito"
            ?   <CheckoutForm
                props={inputsPayment}
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onReset={() => setValue({})}
                onSubmit={({ value }) => {}} />
            :   <> </>}
            <BoxButton direction="row" gap="medium">
                <MyButton type="submit" primary label="Finalizar" />
            </BoxButton>
        </Container>
    );
}

