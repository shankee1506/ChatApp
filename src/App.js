import React from 'react'
import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
        height="100vh"
        projectID="9d7dbcbf-9959-4490-8386-dcbb71905b40"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> <ChatFeed  {...chatAppProps}/>}
    />
  );
}

export default App