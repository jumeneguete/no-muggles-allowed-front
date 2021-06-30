import {FormField, TextInput} from 'grommet';
import {BoxButton, MyButton, MyForm} from "../styles/checkoutFormStyles.js"

export default function CheckoutForm ({props}) {

    return (
        <MyForm>
            <FormField name="name" htmlFor="text-input-id" label={props.input1}>
                <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField name="name" htmlFor="text-input-id" label={props.input2}>
                <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField name="name" htmlFor="text-input-id" label={props.input3}>
                <TextInput id="text-input-id" name="name" />
            </FormField>
            <BoxButton direction="row" gap="medium">
                <MyButton type="submit" primary label="Salvar" />
            </BoxButton>
        </MyForm>
    )
}      
