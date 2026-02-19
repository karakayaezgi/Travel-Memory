

export const calculateTotalDays = (trips = []) => {
    return trips.reduce((acc, trip) => {
        const start = new Date(trip.startDate)
        const end = new Date(trip.endDate)
        const diff = end-start
        const days = diff / (1000 * 60 * 60 * 24)
        return acc + Math.ceil(days)
    },0)
}