import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../../utils/api'
import { PuffLoader } from 'react-spinners'
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai'
import { FaShower } from 'react-icons/fa'
import './Property.css'
import { MdLocationPin, MdMeetingRoom } from 'react-icons/md'
import Map from '../../components/Map/Map'

const Property = () => {
    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    const {data, isLoading, isError} = useQuery(["resd", id], ()=> getProperty(id))

    if(isLoading)
    {return(
        <div className="wrapper">
            <div className="flexCenter paddings">
                <PuffLoader/>
            </div>
        </div>
    )}

    if(isError)
    {
        return(
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching the property details</span>
                </div>
            </div>
        )
    }

  return (
    <div className="wrapper">
        <div className="flexColStart paddings innerWidth property-container">

            {/* like button */}
            <div className="like">
                <AiFillHeart size={24} color='white'/>
            </div>

            {/* image */}
            <img src={data.image} alt="home image"/>

            <div className="flexCenter property-details">

                {/* left side */}
                <div className="flexColStart left">


                    {/* head */}
                    <div className="flexStart head">
                        <span className="primaryText">{data?.title}</span>
                        <span className="orangeText" style={{fontSize: '1.5rem'}}>${data?.price}</span>
                    </div>

                    {/* facilities */}
                    <div className="flexStart facilities">

                        {/* Bathrooms */}
                        <div className="flexStart facility">
                            <FaShower size={20} color='#1F3E72'/>
                            <span>{data?.facilities?.bathrooms} Bathrooms </span>
                        </div>

                        {/* Parkings */}
                        <div className="flexStart facility">
                            <AiTwotoneCar size={20} color='#1F3E72'/>
                            <span>{data?.facilities.parking} Parking </span>
                        </div>

                        {/* Rooms */}
                        <div className="flexStart facility">
                            <MdMeetingRoom size={20} color='#1F3E72'/>
                            <span>{data?.facilities.bedrooms} Room/s </span>
                        </div>

                    </div>

                   {/* description */}
                    <span className="secondaryText" style={{textAlign: "justify"}}>
                        {data?.description}
                    </span> 

                    {/* Address */}
                    <div className="flexStart" style={{gap: "1rem"}}>
                        <MdLocationPin size={25}/>
                        <span className="secondaryText">
                            {
                                data?.address
                            }
                            {
                                data?.city
                            }
                            {
                                data?.country
                            }
                        </span>
                    </div>

                    {/* Booking button */}
                    <button className="button">
                        Book your visit
                    </button>
                </div>

                {/* right side */}
                <div className="map">
                    <Map 
                        address={data?.address} 
                        city={data?.city} 
                        country={data?.country}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Property
