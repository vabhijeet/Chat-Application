import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = ()=>{
    return (
        <ChatEngine 
        height="100vh"
        publicKey={'416a115e-a9e3-40cf-8067-e1d220d1bf0b'}
        userName={'sports_bot'}
        userSecret={'1234'}
        // height="100vh"
        // projectID="416a115e-a9e3-40cf-8067-e1d220d1bf0b"
        // username="sports_bot"
        // userSecreat="1234"
        />
    )
}

export default App;