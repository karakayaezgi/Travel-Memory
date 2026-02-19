import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const TripDetail = () => {

    const {id} = useParams()

    const {trips} = useSelector((store) => store.trip)
    const selectedTrip = trips.find((trip) => trip.id == id)

  return (
    <div>
      {selectedTrip?.country} 
    </div>
  )
}

export default TripDetail
