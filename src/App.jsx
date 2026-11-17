import GameCard from "./GameCard.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <h1>Sevimli o'yinlarim 🎮</h1>

      <GameCard name="Minecraft" emoji="⛏️" rating="9.5" />
      <GameCard name="PUBG" emoji="🔫" rating="9.2" />
      <GameCard name="Roblox" emoji="🎮" rating="9.8" />
    </div>
  );
}

export default App;