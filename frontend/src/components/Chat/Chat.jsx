import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';



function Chat({handleChatClose}) {
    const theme = {
        background: '#f5f8fb',
        fontFamily: '',
        headerBgColor: '#6499E9',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#6499E9',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
    
  return (
    
    <div>
        
        <ThemeProvider theme={theme}>
        <ChatBot
    steps={[
      {
        id: '1',
        message: 'Hi! I am a ChatBot',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Number 1', trigger: '4' },
          { value: 2, label: 'Number 2', trigger: '3' },
          { value: 3, label: 'Number 3', trigger: '3' },
        ],
      },
      {
        id: '3',
        message: 'Wrong answer, try again.',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Awesome! You are a telepath!',
        end: true,
      },
    ]}
  />
  </ThemeProvider>
    </div>
  )
}

export default Chat


