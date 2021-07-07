function PlayersOnGame({ players }) {
  const showPlayer = (player) => {
    return (
      <tr>
        <th scope='row'>{player.id}</th>
        <td>{player.name}</td>
      </tr>
    )
  }

  return (
    <div className='container'>
      <div className='row'>
        <h2>Players</h2>
      </div>
      <div className='row'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
            </tr>
          </thead>
          <tbody>{players.map(showPlayer)}</tbody>
        </table>
      </div>
    </div>
  )
}

export default PlayersOnGame
