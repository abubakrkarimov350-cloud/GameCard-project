import GameCard from "./GameCard";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>🎮 Sevimli o'yinlarim</h1>

      <div className="game-list">
        <GameCard
          name="Minecraft"
          emoji="⛏️"
          rating="9.5"
        />

        <GameCard
          name="PUBG Mobile"
          emoji="🔫"
          rating="9.2"
        />

        <GameCard
          name="Roblox"
          emoji="🎮"
          rating="9.8"
        />
      </div>
    </div>
  );
}

export default App;