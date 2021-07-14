import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed  from './components/ChatFeed';

const App = ()=>{
    return (
        <ChatEngine 
        height="100vh"
        publicKey={'416a115e-a9e3-40cf-8067-e1d220d1bf0b'}
        userName={'sports_bot'}
        userSecret={'1234'}
        renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
        />
    )
}

export default App;