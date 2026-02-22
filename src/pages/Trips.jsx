import React, { useEffect } from 'react'
import TripList from '../components/TripList'
import experiencesBg from '../assets/images/2.jpg'
import { useDispatch } from 'react-redux'
import { getTrip } from '../redux/slices/tripSlice'
import Landings from '../components/Landings'


const Trips = () => {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getTrip())
  }, [])

  return (
    <div>
      <Landings
        backgroundImage={experiencesBg}
        title="Moments That Became Memories."
        description="From small escapes to grand adventures, each experience holds a piece of your story."

      />
      <TripList />
    </div>
  )
}

export default Trips
