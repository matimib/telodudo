import { useState, useEffect } from "react"
import PlayersOnGame from "./PlayersOnGame"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import PlayersOnTable from "./PlayersOnTable"

function Game() {
  const [data, setData] = useState({ playersData: [] })
  const [filter, setFilter] = useState(0)
  const { table } = useParams()
  const [turn, setTurn] = useState("")
  const dummy = ""
  useEffect(() => {
    setFilter(table)

    fetch("http://localhost:3000/playersData")
      .then((response) => response.json())
      .then((data) => {
        setData({ playersData: data })
        setTurn(data[0]["id"])
      })
  }, [dummy])

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

  const changeTurn = (data) => {
    console.log("change turn")
    var n = 0
    for (const player of data) {
      if (turn === player.id) {
        const idxTurn = n
        if (idxTurn === data.length - 1) {
          setTurn(data[0].id)
        } else {
          setTurn(data[idxTurn + 1].id)
          console.log("turn")
          console.log(turn)
        }
      }
      n = n + 1
    }
  }

  return (
    <div className='container'>
      <h1>Table #{table}</h1>
      <div className='row'>
        <div className='col' style={{ width: 200 }}>
          <PlayersOnGame players={filterData(data["playersData"])} />
        </div>
        <div className='col mt-3'>
          <div className='row mt-3' style={{ width: 200 }}>
            <Link to='/myapp'>
              <button type='button' className='btn btn-danger'>
                Back to Player Selection
              </button>
            </Link>
          </div>
          <div className='row mt-3' style={{ width: 200 }}>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => changeTurn(filterData(data["playersData"]))}
            >
              Next Turn
            </button>
          </div>
        </div>
      </div>
      <div className='row'>
        {filterData(data["playersData"]).length > 0 ? (
          <PlayersOnTable
            players={filterData(data["playersData"])}
            turn={turn}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Game
