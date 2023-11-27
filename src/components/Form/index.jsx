import {Formulario, TituloForm, ControleForm , Label, Input, Botao} from "./styles.js"

export function Form(){
    return(
        <Formulario>
            <TituloForm>Formulário</TituloForm>
            <ControleForm>
                <Label>Email</Label>
                <Input/>
            </ControleForm>
            <Botao>Enviar</Botao>
        </Formulario>
    );
};