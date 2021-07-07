import { useState } from "react"

function PlayersRegistry(props) {
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [table, setTable] = useState("")

  const addPlayerToRegistry = () => {
    props.addPlayer({
      name: name,
      avatar: avatar,
      table: table,
    })
    setName("")
    setAvatar("")
    setTable("")
  }

  return (
    <div className='container'>
      <div className='row'>
        <h2>Register Player</h2>
      </div>
      <div className='row' style={{ width: 400 }}>
        <label htmlFor='name-field'>Name:</label>
        <input
          id='name-field'
          type='text'
          className='form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor='avatar'>Avatar:</label>
        <input
          id='avatar-field'
          type='text'
          className='form-control'
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />

        <label htmlFor='table'>Table:</label>
        <input
          id='table-field'
          type='text'
          className='form-control'
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
      </div>
      <div className='row mt-3' style={{ width: 400 }}>
        <button
          type='button'
          className='btn btn-primary'
          onClick={addPlayerToRegistry}
        >
          Create Player
        </button>
      </div>
    </div>
  )
}

export default PlayersRegistry
