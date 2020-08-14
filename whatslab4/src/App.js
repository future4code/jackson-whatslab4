import React from 'react';
import styled from 'styled-components'
import './App.css';

const ConversationContainer = styled.div`
    width: 50%;
    height: 90vh;
    border: solid 1px black;
    margin: 5px auto;
`

const Conversation = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
`

const Form = styled.div`
  display: flex;
  width: 100%;
  `

const Nome = styled.input`
  align-content: stretch;
  width: 20%;
`
const Msg = styled.input`
`

const Botao = styled.button`
  width: 15%;
   
`

function App() {
  return (
    <ConversationContainer>
      <Conversation>
        conteúdo
      </Conversation>
      <Form>
        <Nome 
          placeholder="Usuário"
          value=""
          />
        <Msg 
          placeholder="Mensagem"
          value=""
          />
        <Botao>Enviar</Botao>
      </Form>
    </ConversationContainer>
  );
}

export default App;
