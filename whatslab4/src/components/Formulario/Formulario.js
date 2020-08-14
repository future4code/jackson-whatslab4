import React from 'react'
import styled from 'styled-components'
import bgImage from '../../img/background-img.png'

const ConversationContainer = styled.div`
    display: flex; 
    background-image: url(${bgImage});
    flex-direction: column-reverse;
    flex-wrap: wrap; 
    align-content: space-between; 
    width: 50%;
    height: 90vh;
    border: solid 1px black;
    margin: 5px auto;
    padding: 5px;
`

const Nome = styled.input`
  flex-grow: 1;  
  `
const Msg = styled.input`
  flex-grow: 10;  
`

const Botao = styled.button`
  flex-grow: 1; 
`

const Form = styled.div`
  display: flex;
  width: 100%; 
  `

export default class Formulario extends React.Component {
    state = {
        mensagens:[],
        valorInputUsuario: "",
        valorInputMensagem: ""
      }

    enviarMensagem = () => {
        const novaMsg = {
            usuario: this.state.valorInputUsuario,
            msg: this.state.valorInputMensagem
        }
        const novoArrayDeMensagens = [...this.state.mensagens, novaMsg]

        this.setState({
            mensagens: novoArrayDeMensagens,
            valorInputUsuario: "",
            valorInputMensagem: ""
        })        
    }

    onChangeUsuario = (event) => {
    this.setState({
        valorInputUsuario: event.target.value
    })
    }

    onChangeMensagem = (event) => {
    this.setState({
        valorInputMensagem: event.target.value
    })
    }

    onEnter = (event) => {
        if(event.key === 'Enter') {
            this.enviarMensagem()
        }
    }

    render() {
        const imprimeMensagens = this.state.mensagens.map((msg) => {
            return (
            <p><b>{msg.usuario}:</b> {msg.msg}</p>
            )
        })
        return (
            <ConversationContainer>
                <Form>
                    <Nome 
                        placeholder="Usuário"
                        value={this.state.valorInputUsuario}
                        onChange={this.onChangeUsuario}
                        onKeyDown={this.onEnter}
                        />
                    <Msg 
                        placeholder="Mensagem"
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeMensagem}
                        onKeyDown={this.onEnter}
                        />
                    <Botao onClick={this.enviarMensagem}>Enviar</Botao>
                </Form>
                <div>
                    {imprimeMensagens}
                </div>
            </ConversationContainer>
        )
    }
    

}