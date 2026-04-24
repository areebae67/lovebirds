import { useState } from "react";
import Home from "./page/Home";
import Messages from "./page/Messages";
import Sanctuary from "./page/Sanctuary";
import Vault from "./page/Vault";
import Profile from "./page/Profile";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "messages":
        return <Messages />;
      case "sanctuary":
        return <Sanctuary />;
      case "vault":
        return <Vault />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <MainLayout setPage={setPage} page={page}>
      {renderPage()}
    </MainLayout>
  );
}