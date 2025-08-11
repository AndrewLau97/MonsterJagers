const PlayerStats = () => {
  return (
    <>
      <div id="playerStats" className="rpgui-container framed-golden-2">
        <div id="noBars">
        <span className="stat fade">
          Lvl: <span id="lvlText" className="fade"></span>
        </span>
        <span className="stat fade">
          Gold: <span id="goldText" className="fade"></span>
        </span>
        </div>
        <div id="bars">
        <div id="alignBar">
          <span className="stat fade">HP: </span>
          <div id="healthBar">
            <div id="leftBar"></div>
            <div id="healthAmount"></div>
            <div id="rightBar"></div>
          </div>
          <span id="healthText" className="fade">
            <span id="currentHealth"></span>/<span id="maxHealth"></span>
          </span>
        </div>
        <div id="alignBar">
          <span className="stat fade">MP: </span>
          <div id="manaBar">
            <div id="leftBar"></div>
            <div id="manaAmount"></div>
            <div id="rightBar"></div>
          </div>
          <span id="manaText" className="fade">
            <span id="currentMana"></span>/<span id="maxMana"></span>
          </span>
        </div>
        <div id="alignBar">
          <span className="stat fade">
            XP: <span id="xpText" className="fade"></span>
          </span>
          <div id="xpBar">
            <div id="leftBar"></div>
            <div id="xpAmount"></div>
            <div id="rightBar"></div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default PlayerStats;
