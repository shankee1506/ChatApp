import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function LoginForm() {
     const [username, setUsername]= useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');
    

     const handleSubmit =async (e) =>{
         e.preventDefault();

        const authObject = {'Project-ID':"9d7dbcbf-9959-4490-8386-dcbb71905b40" ,'User-Name':username,'User-Secret':password}

        try {
            // username | password => chatengine -> give message
            // works out -> logged in
           await axios.get('https://api.chatengine.io/chats', {headers:authObject});

           localStorage.setItem('username', username);
           localStorage.setItem('password', password);
     
           window.location.reload();
        } catch (error) {
            // error -> try with new username..
            setError('Oops, Incorrect credintial');
        }
     }

  return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className='title'>Chat Application</h1>
            <form onSubmit={handleSubmit}>
                 <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder='UserName' required/>
                 <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder='Password' required/>

                 <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>

            <h2 className="error">{error}</h2>
            </form>
            
        </div>
    </div>
  )
}

export default LoginForm