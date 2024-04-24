import { createContext, useState } from 'react'

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider( {children} ) {
  const [usuario, setUsuario] = useState({});

  function login(email, senha){
    if(email == 'almada@email.com' 
    && senha == '123'){
      setUsuario({
        nome: 'Luiz Almada',
        email: email,
        endereco: 'Rua 227, Quadra 111',
        telefone: '(61) 9999-9999'
      })
      return 'ok'
    }
    else{
      return 'Email ou senha incorretos';
    }
  }

  return (
    <AutenticacaoContext.Provider value={{
      usuario,
      login

    }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}