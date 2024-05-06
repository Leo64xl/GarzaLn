//Chat 
import React from 'react'
import '../Diseños_css/Chat.css';
import { useState, useEffect } from 'react';
import { Container, Divider, Card, CardContent, Icon, FormField, Button, Form, Input, MessageHeader, Message } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';


const Chat = ({socket, username, room}) => {

  

    const [currentMessage, setCurrentMessage] = useState("");
    const [messagesList, setMessagesList] = useState([]);
    
    const sendMessage = async () => {
        if(username && currentMessage) {
            const info = {
                message: currentMessage,
                room,
                author: username,
                time: new Date(Date.now()).getHours()+":"
                +new Date().getMinutes(),
            };

            await socket.emit("send_message", info);
            setMessagesList((list) => [...list, info]);
            setCurrentMessage("");
        }
    }

    useEffect(() => {
          const messageHandle = (data) => {
            setMessagesList ((list) => [...list, data]);
          }
        socket.on("receive_message", messageHandle);
        return () => socket.off("receive_message", messageHandle)
    }, [socket]);

  return (
    
    <div className='backM'>
      <div className='backS'>
      <h4 className='holder'>relleno</h4>
       <CardContent header={`Chat en vivo   |   Sala: ${room}`} />
       <ScrollToBottom>
       <CardContent style={{height:"391px", padding:"15px" }}>
           
        {messagesList.map((item, i) => {
          return (
           <span key={i}>
          <Message style={{textAlign: username===item.author?'right' : 'left'}}
          success={username===item.author}
          info={username!==item.author}
          >
            <MessageHeader>{item.message}</MessageHeader>
              <p>Enviado por: <strong>{item.author}</strong>, a las <i>{item.time} hrs</i></p>
              
            </Message>
             <Divider />               
          </span>  
          );  
        })}
        </CardContent>
       </ScrollToBottom>
       <CardContent extra>
         <Form>
             <FormField>
               <div class="ui action input">
               <div className='relleno1'>
               <a className='relleno2' href="https://www.paypal.com/us/digital-wallet/send-receive-money/send-money" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faMoneyBillTransfer} />
               </a>
               </div>
                <Input
                    type='text' 
                    value={currentMessage}
                    placeholder='Mensaje'
                    onChange={e => setCurrentMessage(e.target.value)}
                />
                 <button className="ui-button" onClick={sendMessage}>
                      <FontAwesomeIcon icon={faPaperPlane} />
                 </button>
                </div>
             </FormField>
          </Form>
       </CardContent>
     </div>    
    </div>
  )
}

export default Chat