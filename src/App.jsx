import { useEffect, useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput.jsx'
import { ChatMessages } from './components/ChatMessages.jsx';
import { Chatbot } from 'supersimpledev';

function App() {
    const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
    // const [chatMessages, setChatMessages] = array;
    // const chatMessages = array[0];
    // const setChatMessages = array[1];

    const addnlResponses = {
        "Hi": "hello",
        "abcd": "kasvbnakf"
    };

    useEffect(() => {
        Chatbot.addResponses(addnlResponses);
    }, []);

    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(chatMessages))
    }, [chatMessages]);

    console.log(localStorage.getItem('messages'));

    return (
        <div className="app-container">
            {chatMessages.length == 0 ?
                <div className="initial-message-container"><p>Welcome to the Chatbot project! Send a message using the textbox below.</p></div> :
                <ChatMessages
                    chatMessages={chatMessages}
                />
            }
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App