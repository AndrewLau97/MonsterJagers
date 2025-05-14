const CharacterStats = ({saveFile}) => {
  return (
    <>
      <div id="stats">
        <span className="stat fade">
          XP:{" "}
          <span id="xpText" className="fade">
            {saveFile.xp}
          </span>
        </span>
        <span className="stat fade">
          Health:{" "}
          <span id="healthText" className="fade">
            {saveFile.health}
          </span>
        </span>
        <span className="stat fade">
          Mana:{" "}
          <span id="manaText" className="fade">
            {saveFile.mana}
          </span>
        </span>
        <span className="stat fade">
          Gold:{" "}
          <span id="goldText" className="fade">
            {saveFile.gold}
          </span>
        </span>
      </div>
    </>
  );
};

export default CharacterStats;
