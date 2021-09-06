import React from 'react'
import Backend from '../services/backend/backend'
import { handleServerError } from '../services/backend/handle-server-error'

function Home() {
  const backend = new Backend()

  return (
    <div className="h-screen p-12 font-sans tracking-wider bg-blue-700">
      <div className="flex items-center">
        <button
          onClick={() => {
            backend.findCoursesByKeyword('data').then(x =>
              x.cata(handleServerError, res => {
                console.log(res)
              }),
            )
          }}
        >
          Trigger
        </button>
      </div>
    </div>
  )
}

export default Home
