import React from 'react'
import { Formik, Form} from 'formik'
import { TextField } from './TextField'
import * as Yup from 'yup'

export const Cadastrar = () => {
    const validate = Yup.object({
        nome : Yup.string().max(15, " deve ser menor que 15 letras" ).required('Campo Obrigatório'),
        sobreNome : Yup.string().max(35, " deve ser menor que 15 letras" ).required('Campo Obrigatório'),
        email : Yup.string().email( " Email invalido" ).required('Email invalido'),
        senha : Yup.string().min(6, "deve ter no minimo 6 caracteres" ).required('Campo Obrigatório'),
        confirmarSenha : Yup.string().oneOf([Yup.ref('senha'), null], "Senha precisam ser iguais").required('Campo Obrigatório'),
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
              <div >
                  <h1>Fomidavel</h1>
                
                  <Form>
                    <TextField  label="Nome" name='nome' type='text'/>
                    <TextField  label="sobreNome" name='sobreNome' type='text'/>
                    <TextField  label="email" name='email' type='email'/>
                    <TextField  label="senha" name='senha' type='password'/>
                    <TextField  label="confirmarSenha" name='confirmarSenha' type='password'/>
                    <button  type="submit" >Cadastrar</button>
                    <button type="reset">Limpar</button>
                  </Form>
              </div>
          )}
        </Formik>
    )
}
