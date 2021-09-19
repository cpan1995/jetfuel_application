import './App.css';
import React, { useEffect, useState } from 'react'
import ProfileCards from './ProfileCards';
import SearchBar from './SearchBar'
function App() {

  const [profiles, setProfiles] = useState([])
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
    .then(response => response.json())
    .then(data => setProfiles(data.students))
  }, [])

  let filterdStudents = [];

  if(filter){
    filterdStudents = profiles.filter((profile) => {
      let fullName = `${profile.firstName} ${profile.lastName}`
      if(fullName.toLowerCase().includes(filter.toLowerCase())){
        return true
      }
    })
  }
  else{
    filterdStudents = [...profiles]
  }


  const profilesContainers = filterdStudents.map((profile) => {

    const reducer = (a, b) => a + b;
    let userAvg = profile.grades.map(Number).reduce(reducer)/profile.grades.length
    return <ProfileCards 
              key = {profile.id} 
              userAvg = {userAvg} 
              skill = {profile.skill} 
              company = {profile.company}
              email = {profile.email}
              firstName = {profile.firstName}
              lastName = {profile.lastName}
              profileImg = {profile.pic}
              grades = {profile.grades}
    />
  })

  
  function handleSearchBarCallback(searchValue){
    setFilter(searchValue)
  }

  return (
    <div className="parentContainer">
      <SearchBar callBack = {handleSearchBarCallback}/>
      {profilesContainers}
    </div>
  );
}

export default App;
