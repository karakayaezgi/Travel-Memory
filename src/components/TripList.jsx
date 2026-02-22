import React from 'react'
import TripCard from '../components/TripCard'
import { useSelector } from 'react-redux'


const TripList = () => {

  const {trips} = useSelector((store) => store.trip)


  return (
    <div className="grid gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-5 my-5" >
      {
        trips && trips?.map((trip) => (
          <TripCard key={trip.id} trip={trip}/>
        ))
      }
    </div>
  )
}

export default TripList
