import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
    const [usuario, setUsuario] = useState(null);

    async function login(email, senha){
      if(email === 'almada@email.com' && senha === '123'){
          setUsuario({
              nome: 'Luiz Almada',
              email: email,
              telefone: '+55 (61) 99999-9999',
              endereco: 'Rua 227, Quadra 111',
          });
          return 'ok';
      }
      return 'Email ou senha incorretos';
    }

    return (
        <AutenticacaoContext.Provider
            value={{
                usuario,
                login,
            }}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
}