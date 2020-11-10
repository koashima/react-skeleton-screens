import React, { useEffect, useState } from 'react';

const User = () => { 
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout( async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await res.json();
      setProfile(data);
    }, 5000)
  })

  return(
    <div class="user">
      <h2>USER DETAILS</h2>
      {profile && (
      <div class="profile">
        <h3>{profile.username}</h3>
        <p>{profile.email}</p>
      <a href={profile.website}>{profile.website}</a>
      </div>
    )}
    {!profile && (
      <div>
        <h1>LOADING...</h1>
      </div>
    )}
    </div>
  )
}

export default User;