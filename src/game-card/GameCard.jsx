function GameCard({ name, emoji, rating }) {
  return (
    <div className="game-card">
      <div className="game-emoji">{emoji}</div>
      <h2>{name}</h2>
      <p>⭐ Reyting: {rating}</p>
    </div>
  );
}

export default GameCard;