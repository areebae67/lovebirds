import { useState } from "react";

function Home() {
  return <div className="p-6 text-xl font-bold">Home Screen</div>;
}

function Messages() {
  return <div className="p-6 text-xl font-bold">Messages Screen</div>;
}

function Vault() {
  return <div className="p-6 text-xl font-bold">Vault Screen</div>;
}

function Profile() {
  return <div className="p-6 text-xl font-bold">Profile Screen</div>;
}

function Sanctuary() {
  return <div className="p-6 text-xl font-bold">Sanctuary Screen</div>;
}

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "messages":
        return <Messages />;
      case "vault":
        return <Vault />;
      case "profile":
        return <Profile />;
      case "sanctuary":
        return <Sanctuary />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* LEFT SIDEBAR */}
      <div className="w-60 bg-white border-r shadow-md p-4 flex flex-col gap-3">
        <h1 className="text-xl font-bold mb-4">Lovebirds</h1>

        <button
          onClick={() => setPage("home")}
          className="text-left p-2 hover:bg-pink-100 rounded"
        >
          Home
        </button>

        <button
          onClick={() => setPage("messages")}
          className="text-left p-2 hover:bg-pink-100 rounded"
        >
          Messages
        </button>

        <button
          onClick={() => setPage("vault")}
          className="text-left p-2 hover:bg-pink-100 rounded"
        >
          Vault
        </button>

        <button
          onClick={() => setPage("sanctuary")}
          className="text-left p-2 hover:bg-pink-100 rounded"
        >
          Sanctuary
        </button>

        <button
          onClick={() => setPage("profile")}
          className="text-left p-2 hover:bg-pink-100 rounded"
        >
          Profile
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        {renderPage()}
      </div>
    </div>
  );
}