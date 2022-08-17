import React, { Component, useState } from 'react';
import Input from '../../Input';
import Button from '../../Button';
import * as S from "./styles";



function Login() {

  const [formFields, setFormFields] = useState(
    {
      username: '',
      password: ''
    }
  )

  function handleSubmit(e: any) {
    e.preventDefault()
    console.log("handleSubmit")
  }
  function handleInputChange(e: any) {
    e.presist()
    debugger
    setFormFields(s => ({
      ...s,
      [e.target.name]: e.target.value

    }));
  };
  return (
    <div>
      <S.TitleLogin> <h1> Log In </h1> </S.TitleLogin>

      <form onSubmit={handleSubmit}>
        <Input
          //@ts-ignore
          name="username"
          value={formFields.username}
          type="text"
          onChange={handleInputChange}
          title={"Email account"}
          // error={"this is an error"}
          placeholder="Enter your email addreass"
        />
        <Input
          //@ts-ignore
          name="password"
          value={formFields.password}
          type="text"
          onChange={handleInputChange}
          title={"Password"}
          // error={"this is an error"}
          placeholder="6 charaters and digit numbers"
        />

        {/* @ts-ignore */}
        <Button type={"submit"} variant='primary'>Submit</Button>
      </form>
    </div>
  )
};


export default Login;

