// import React from "react";
// import {useHistory} from 'react-router-dom';
// const Chats = () => {
//     return (
//         <h1>chatts</h1>
//     )
// }
// export default Chats;


import React from "react";
import {useHistory} from 'react-router-dom';
import {ChatEngine} from 'react-chat-engine';
import {auth} from '../firebase';
import {useAuth} from '../contexts/AuthContext';
const Chats = () => {
    const history = useHistory();
    const {user} =useAuth();
    console.log(user);
    const handleLogout =  async () => {
        await auth.signOut();
        history.push('/');

    }
    return (
       <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    ChitChat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
                height="calc(100vh-66px)"
                projectId="1f48133a-2e7b-49b4-9d6a-e2557587b607"
                userName="."
                userSecret="."
            />
       </div>
    )
}
export default Chats;