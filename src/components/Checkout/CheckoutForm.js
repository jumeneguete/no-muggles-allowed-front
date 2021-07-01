import {FormField, TextInput} from 'grommet';
import {BoxButton, MyButton, MyForm} from "../../styles/checkoutFormStyles"

export default function CheckoutForm ({titles, names, states, onSubmit, disabled}) {
    return (
        <MyForm onSubmit={onSubmit}>
            <FormField name={names[0]} label={titles[0]}>
                <TextInput  name={names[0]} 
                            onChange={(event) => (states[0])(event.target.value)}
                            disabled={disabled}/>
            </FormField>
            <FormField name={names[1]} label={titles[1]}>
                <TextInput  name={names[1]} 
                            onChange={event => states[1](event.target.value)}
                            disabled={disabled}/>
            </FormField>
            <FormField name={names[2]} label={titles[2]}>
                <TextInput  name={names[2]} 
                            onChange={event => states[2](event.target.value)}
                            disabled={disabled}
                            type={names[2] === "CPF" ? "text" : "date"}/>
            </FormField>
            <BoxButton direction="row" gap="medium">
                <MyButton type="submit" primary label="Salvar"/>
            </BoxButton>
        </MyForm>
    )
}      
