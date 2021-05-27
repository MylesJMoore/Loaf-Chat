import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="b0f1354a-4abf-44a0-a778-e7ea93de8bb9"
            userName="Loafboy"
            userSecret="loafcentral1"
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    )
}

export default App;