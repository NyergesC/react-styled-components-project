import React from 'react'
import { FormContent, FormH1, Container, FormWrap, Icon, Form, FormLabel, FormInput, FormButton, Text } from './SigninElements'


const Signin = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">Portfolio</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>E-mail</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot your password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>




    </>
  )
}

export default Signin