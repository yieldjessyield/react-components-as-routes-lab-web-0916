import React from 'react'
import { actors } from '../data'

const Actors = () => {
    return (
        <div>
            <h1>Actors Page</h1>
            {actors.map(actor =>{
              return <div>
              {actor.name}
              <ul>
              {actor.movies.map(movie =>{
                return <li>{movie}</li>
              })}
              </ul>
              </div>
            })}
        </div>
    )
}

module.exports = Actors
