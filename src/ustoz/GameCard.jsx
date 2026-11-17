function GameCard({ name, emoji, rating }) {
  return (
    <div className="game-card">
      <h2>{emoji} {name}</h2>
      <p>⭐ Reyting: {rating}</p>
    </div>
  );
}

export default GameCard;