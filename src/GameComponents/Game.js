import { useState, useEffect } from "react"
import PlayersOnGame from "./PlayersOnGame"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import PlayersOnTable from "./PlayersOnTable"

function Game() {
  const [data, setData] = useState({ playersData: [] })
  const [filter, setFilter] = useState(0)
  const { table } = useParams()

  useEffect(() => {
    //setFilter(table)

    fetch("http://localhost:3000/playersData")
      .then((response) => response.json())
      .then((data) => setData({ playersData: data }))
  }, [])

  const filterData = (data) => {
    const filteredData = []
    for (const player of data) {
      if (filter !== 0 && player.table !== filter) {
        continue
      }
      filteredData.push(player)
    }
    return filteredData
  }

  return (
    <div className='container'>
      <h1>Table #{table}</h1>
      <div className='row'>
        <div className='col' style={{ width: 200 }}>
          <PlayersOnGame players={filterData(data["playersData"])} />
        </div>
        <div className='col mt-3' style={{ width: 200 }}>
          <Link to='/myapp'>
            <button type='button' className='btn btn-danger'>
              Back to Player Selection
            </button>
          </Link>
        </div>
      </div>
      <div className='row'>
        {data["playersData"].length > 0 ? (
          <PlayersOnTable players={data["playersData"]} />
        ) : null}
      </div>
    </div>
  )
}

export default Game
