function PlayersOnTable(props) {
  const getRandomIntArray = (n) => {
    return Array.from(
      { length: n },
      (min = 1, max = 6) => Math.floor(Math.random() * (max - min + 1)) + min
    )
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const currentPlayers = props.players
  const myPlayers = currentPlayers.map((player) => {
    return { ...player, lifes: getRandomIntArray(5) }
  })

  console.log("myplayers")
  console.log(myPlayers)

  return (
    <div className='container'>
      <div className='row'>
        {myPlayers.map((player) => {
          return (
            <div className='col'>
              <div className='row'>
                {player.name} id-{player.id}
              </div>
              {player.lifes.map(() => {
                return (
                  <div className='row'>
                    <h2> {getRandomInt(1, 6)}</h2>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlayersOnTable
