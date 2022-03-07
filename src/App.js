import React from 'react'
import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine 
        height="100vh"
        projectID="9d7dbcbf-9959-4490-8386-dcbb71905b40"
        userName="Tony12"
        userSecret="Tony1234"
        renderChatFeed={(chatAppProps)=> <ChatFeed  {...chatAppProps}/>}
    />
  );
}

export default App