import "./App.css";
import ChatPanel from "./components/ChatPanel/ChatPanel";

function App() {
  return (
    <div className="relative z-0 flex h-full w-full overflow-hidden dark:bg-zinc-700 bg-white dark:text-white">
      <ChatPanel />
    </div>
  );
}

export default App;
