import React from "react"
import Toast from "react-bootstrap/Toast"

function PlayerCreationToast(props) {
  return (
    <div className='container'>
      <div className='row'>
        <Toast
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 250,
          }}
          onClose={() => props.toastShow(false)}
          show={true}
          delay={2500}
          autohide
        >
          <Toast.Header closeButton={false}>
            <img
              src='holder.js/20x20?text=%20'
              className='rounded mr-2'
              alt=''
            />
            <strong className='m-auto'>Message</strong>
          </Toast.Header>
          {props.toastStatusOk ? (
            <Toast.Body>Woohoo, player creation Successfully!</Toast.Body>
          ) : (
            <Toast.Body>Sorry :( ... Player could not be created</Toast.Body>
          )}
        </Toast>
      </div>
    </div>
  )
}

export default PlayerCreationToast
