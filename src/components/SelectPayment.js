import { OptionsPayment } from "../styles/checkoutFormStyles";

export default function SelectPayment ({payment, setPayment}) {
    
    return (
        <OptionsPayment
        name="doc"
        options={['Boleto', 'Cartão de crédito']}
        value={payment}
        onChange={(event) => setPayment(event.target.value)}
        />
  );
}