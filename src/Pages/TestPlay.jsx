import GameControls from "../Components/Test/GameControls"
import GameScene from "../Components/Test/GameScene"
import GameText from "../Components/Test/GameText"
import MonsterStats from "../Components/Test/MonsterStats"
import PlayerStats from "../Components/Test/PlayerStats"

const TestPlay=()=>{
    return (<>
        <div id="game" className="rpgui-content">
            <GameScene/>
            <MonsterStats/>
            <GameText/>
            <div id="player">
            <PlayerStats/>
            <GameControls/>
            </div>
        </div>
    </>)
}

export default TestPlay