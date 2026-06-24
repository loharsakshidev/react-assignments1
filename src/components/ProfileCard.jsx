import React, { useState } from 'react'

const ProfileCard = () => {

  const [information, setInformation] = useState(null)

  const virat = {
    name: "Virat Kohli",
    role: "Batsman",
    country: "India"
  }

  const rohit = {
    name: "Rohit Sharma",
    role: "Batsman",
    country: "India"
  }

  const dhoni = {
    name: "MS Dhoni",
    role: "Wicket Keeper",
    country: "India"
  }

  return (
    <div className="container">
      <p className='mt-5'>Assignment No. 4</p>

      <h1 >Profile Card</h1>

      <button
        className='btn btn-warning m-3'
        onClick={() => setInformation(virat)}
      >
        Virat Kohli
      </button>

      <button
        className='btn btn-warning m-3'
        onClick={() => setInformation(rohit)}
      >
        Rohit Sharma
      </button>

      <button
        className='btn btn-warning m-3'
        onClick={() => setInformation(dhoni)}
      >
        MS Dhoni
      </button>

      {information && (
        <div>
          <h3>Name: {information.name}</h3>
          <h3>Role: {information.role}</h3>
          <h3>Country: {information.country}</h3>
        </div>
      )}

    </div>
  )
}

export default ProfileCard