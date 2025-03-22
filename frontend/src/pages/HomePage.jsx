import React from 'react'
import { useChatStore } from '../store/useChatStore'
import Sidebar from '../components/Sidebar'
import NoChatSelected from '../components/NoChatSelected'
import ChatContainer from '../components/ChatContainer'

const HomePage = () => {
    const { selectedUser, messages, isMessagesLoading, isUsersLoading, getUsers, getMessages, sendMessage, subscribeToMessages } = useChatStore();
    return (
        <div className="h-screen">
            <div className="flex item-center justify-center pt-20 px-4">
                <div className='rounded-lg shadow-cl w-full h-[calc(100vh-8rem)]'>
                    <div className="flex h-full rounded-lg overflow-hidden">
                        <Sidebar />
                        {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage