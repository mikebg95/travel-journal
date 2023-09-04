import React from 'react'


// id: 1,
// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"

const Visit = ({ item }) => {

    const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = item

    return (
        <div className="Visit">
            <div className="img-container">
                <img src={imageUrl} />
            </div>

            <div className="information">
                <div className="location">
                    <i class="fa-solid fa-location-dot" />
                    <span>{location.toUpperCase()}</span>
                    <a href={googleMapsUrl} className="url">View on Google Maps</a>
                </div>

                <h2>{title}</h2>

                <span>{startDate} - {endDate}</span>

                <p>{description}</p>
        
            </div>
        </div>
    )
}

export default Visit
