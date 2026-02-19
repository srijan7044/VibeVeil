// 


//gemini code


import { useChatStore } from "../store/useChatStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    // Center the container and give it some breathing room from the edges
    <div className="relative w-full max-w-6xl h-[85vh] mx-auto my-8">
      <BorderAnimatedContainer>
        {/* LEFT SIDE: Sidebar with a deep translucent purple/slate tint */}
        <div className="w-80 bg-slate-950/60 backdrop-blur-xl flex flex-col border-r border-white/5">
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE: Main chat area, slightly more transparent to show the stars */}
        <div className="flex-1 flex flex-col bg-slate-900/40 backdrop-blur-md relative">
          {/* Subtle inner purple glow in the top corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none" />
          
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}

export default ChatPage;