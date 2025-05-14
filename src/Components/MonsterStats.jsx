const MonsterStats = () => {
  return (
    <>
      <div id="monsterStats">
        <span className="stat fade">
          Monster Name:{" "}
          <strong>
            <span id="monsterName" className="fade"></span>
          </strong>
        </span>
        <span className="stat fade">
          Health:{" "}
          <strong>
            <span id="monsterHealthText" className="fade"></span>
          </strong>
        </span>
      </div>
    </>
  );
};

export default MonsterStats;
