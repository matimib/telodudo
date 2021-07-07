import "./RegisterPlayer.css"
import { useState } from "react"
import PlayersRegistry from "./PlayersRegistry"
import PlayerCreationToast from "./PlayerCreationToast"
import PlayerSelection from "./PlayerSelection"

function RegisterPlayer() {
  const [playersData, setPlayersData] = useState({ playersData: [] })
  const [showToast, setShowToast] = useState(false)
  const [toastStatusOk, setToastStatusOk] = useState(true)

  const addPlayersToData = (player) => {
    let players = playersData["playersData"]

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    }
    fetch("http://localhost:3000/playersData", requestOptions)
      .then((response) => {
        console.log("response")
        if (response.ok) {
          setShowToast(true)
          setToastStatusOk(true)
          return response.json()
        }
      })
      .then((data) => {
        players.push(data)
        setPlayersData({ playersData: players })
      })
      .catch((error) => {
        console.log(error)
        setShowToast(true)
        setToastStatusOk(false)
      })
  }

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col'>
          <PlayersRegistry addPlayer={addPlayersToData} />
          {showToast ? (
            <PlayerCreationToast
              toastShow={setShowToast}
              toastStatusOk={toastStatusOk}
            />
          ) : null}
        </div>
        <div className='col'>
          <PlayerSelection data={playersData["playersData"]} />
        </div>
      </div>
    </div>
  )
}

export default RegisterPlayer
