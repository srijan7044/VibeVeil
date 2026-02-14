import ChatPage from "./pages/ChatPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

function App() {

  const {authUser,Login, isLoggedIn}=useAuthStore();

  console.log("Auth User from App.jsx",authUser);
  console.log("Is Logged In from App.jsx",isLoggedIn);
  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">
      {/* DECORATORS - GRID BG & GLOW SHAPES*/}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

<div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px] pointer-events-none" />

<div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px] pointer-events-none" />

      {/* STARFIELD FIXED */}
      {/* <div className="absolute inset-0 bg-slate-950 pointer-events-none" />

<div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px] opacity-8 pointer-events-none" />

<div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-black pointer-events-none" /> */}

      <button onClick={Login}className="z-10  ">Login</button>

      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
