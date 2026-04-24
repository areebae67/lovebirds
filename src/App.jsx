import { useState } from "react";
import Home from "./page/Home";
import Messages from "./page/Messages";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home setPage={setPage} />}
      {page === "messages" && <Messages setPage={setPage} />}
    </>
  );
}