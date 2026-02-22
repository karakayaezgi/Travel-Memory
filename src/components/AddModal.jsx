import React from 'react'
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { addTrip } from '../redux/slices/tripSlice'




const schema = Yup.object({
    country: Yup.string().required('You must choose country!'),
    city: Yup.string().required('You must choose city!'),
    place: Yup.string().required('The place you go to must have a name!'),
    startDate: Yup.string().required('You must enter a start date!'),
    endDate: Yup.string().required('You must enter a end date!'),
    image: Yup.string().required('You must enter a image link!'),
    description: Yup.string().required('At least write something!'),
})

const AddModal = ({setIsTravelModal, countries}) => {

    const { register, handleSubmit, reset, watch, formState:{errors}} = useForm({resolver: yupResolver(schema)})
    const selectedCountry = watch('country')
    const dispatch = useDispatch()
    

    const onSubmit = (data) =>{
        setIsTravelModal(false)
        dispatch(addTrip(data))
    }

    const selectedCountryData = countries.find((country) => (
        country.country == selectedCountry
    ))

    
    
    

    return (
        <div className='bg-amber-50 absolute p-8 rounded-2xl w-[350px] md:w-[500px]'>
            <div className='mb-8'>
                <strong className='text-3xl'>Add New Memory</strong>
                <p className='text-sm'>Document your journey accross the globe.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <select {...register("country")} className='outline-0 p-2 border border-gray-300 rounded-2xl'>
                        <option value="">Select Country</option>
                        {
                            countries.map((country, i) => (
                                <option key={i} value={country.country}>{country.country}</option>
                            ))
                        }
                    </select>
                    {errors.country && <p className='text-red-700 text-xs'>{errors.country.message}</p>}
                </div>
                <div className='flex flex-col'>
                    <select {...register("city")} disabled={!selectedCountry} className='outline-0 p-2 border border-gray-300 rounded-2xl'>
                        <option value="">Select City</option>
                        {
                            selectedCountry && 
                            selectedCountryData.cities.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))
                        }
                    </select>
                    {errors.city && <p className='text-red-700 text-xs'>{errors.city.message}</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='text-xs text-gray-500 capitalize' htmlFor="place">Place</label>
                    <input {...register("place")} className='outline-0 p-2 border border-gray-300 rounded-2xl' type="text" placeholder='Place' />
                    {errors.place && <p className='text-red-700 text-xs'>{errors.place.message}</p>}
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <label className='text-xs text-gray-500' htmlFor="startDate">Start Date</label>
                        <input {...register("startDate")} className='outline-0 p-2 border border-gray-300 rounded-2xl' type="date" />
                        {errors.startDate && <p className='text-red-700 text-xs'>{errors.startDate.message}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-xs text-gray-500' htmlFor="endDate">End Date</label>
                        <input {...register("endDate")} className='outline-0 p-2 border border-gray-300 rounded-2xl' type="date" />
                        {errors.endDate && <p className='text-red-700 text-xs'>{errors.endDate.message}</p>}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-xs text-gray-500' htmlFor="image">Image</label>
                    <input {...register("image")} className='p-2 border border-gray-300 rounded-2xl' type="text" placeholder='Please paste the image link!' />
                    {errors.image && <p className='text-red-700 text-xs'>{errors.image.message}</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='text-xs text-gray-500' htmlFor="desc">Description</label>
                    <textarea {...register("description")} className='outline-0 p-2 border border-gray-300 rounded-2xl' placeholder='Description'/>
                    {errors.description && <p className='text-red-700 text-xs'>{errors.description.message}</p>}
                </div>
                <div className='flex justify-end gap-3'>
                    <button className='transition-all ease-in-out duraiton-200 hover:scale-105 cursor-pointer border border-gray-300 rounded-2xl p-2' onClick={() => setIsTravelModal(false)} type='button'>Kapat</button>
                    <button type='submit' className='transition-all ease-in-out duraiton-200 hover:scale-105 cursor-pointer border border-gray-300 rounded-2xl p-2 text-green-700'>Kaydet</button>
                </div>
            </form>
        </div>
    )
}

export default AddModal
