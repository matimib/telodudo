import { Link } from "react-router-dom"
import { Table } from "react-bootstrap"

function PlayerSelection(props) {
  const selectedPlayer = props.data[parseInt(props.data.length) - 1]

  return props.data.length > 0 ? (
    <div className='col'>
      <h2>Player Selected</h2>
      <Table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{selectedPlayer.name}</td>
          </tr>
          <tr>
            <td>Avatar</td>
            <td>{selectedPlayer.avatar}</td>
          </tr>
          <tr>
            <td>Table</td>
            <td>{selectedPlayer.table}</td>
          </tr>
        </tbody>
      </Table>
      <Link to={`/game/${selectedPlayer.table}`}>
        <button type='button' className='btn btn-danger'>
          Go to table!
        </button>
      </Link>
    </div>
  ) : (
    <button type='button' className='btn btn-danger'>
      Go to table!
    </button>
  )
}

export default PlayerSelection
