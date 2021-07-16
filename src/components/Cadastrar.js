import React from 'react'
import { Formik} from 'formik'
import { TextField } from './TextField'
import * as Yup from 'yup'
import styled from 'styled-components'

export const Cadastrar = () => {
    const validate = Yup.object({
        nome : Yup.string().max(15, " deve ser menor que 15 letras" ).required('Campo Obrigatório'),
        sobreNome : Yup.string().max(35, " deve ser menor que 15 letras" ).required('Campo Obrigatório'),
        email : Yup.string().email( " Email invalido" ).required('Informe um e-mail válido'),
        senha : Yup.string().min(6, "deve ter no minimo 6 caracteres" ).required('Campo Obrigatório'),
        confirmarSenha : Yup.string().oneOf([Yup.ref('senha'), null], "Senha precisa ser iguais").required('Campo Obrigatório'),
    })
    return (
        <Formik
        initialValues={{
            nome: '',
            sobreNome: '',
            email:'',
            senha:'',
            confirmarSenha:''
        }}
        validationSchema={validate}
        >
          {formik => ( 
              <Container >
                  <Title>Cadastre-se</Title>
                
                  <Container>
                    <TextField  label="Nome" name='nome' type='text'/>
                    <TextField  label="Sobre Nome" name='sobreNome' type='text'/>
                    <TextField  label="Email" name='email' type='email'/>
                    <TextField  label="Senha" name='senha' type='password'/>
                    <TextField  label="Confirmar Senha" name='confirmarSenha' type='password'/>
                    <BoxBtn>
                        <Btn  type="submit" >Cadastrar</Btn>
                       
                    </BoxBtn>
                  </Container>
              </Container>
          )}
        </Formik>
    )
}


const Title = styled.h1`
color: #006B3F;
font-weight: bold;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const Container = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const BoxBtn = styled.div`
display: flex;
justify-content:space-around;
width: 100%;
padding: 15px 0;

`
const Btn = styled.button`
    color:#006B3F;
    width: 6rem;
    height: 6vh;
    border-radius: 5px;
`