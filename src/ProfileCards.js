import React, { useEffect, useState } from 'react'

export default function ProfileCards({userAvg, skill, company, email, firstName, lastName, profileImg, grades}){

    const [toggle, setToggle] = useState(true)

    const generateGrades = grades.map((currentGrade, index) => {
        return (
            <div>
                Test {index+1}:  {currentGrade}%
            </div>
        )
    })

    console.log(generateGrades)

    return(
        <div>
            <div className = "profileContainer">
                <div className='profileContainerDiv'>
                    <img src ={profileImg} alt={`pofile picture of ${firstName} ${lastName}`} className = "profileImg"/>
                </div>
                <div className = "profileInfoContainer">
                    <h1 className = "profileName">
                        {`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
                    </h1>
                    <div className = "profileInfo">
                        <p>Email: {email}</p>
                        <p>Company: {company}</p>
                        <p>Skill: {skill}</p>
                        <p>Average: {userAvg}%</p>
                        {!toggle ? <div>{generateGrades}</div> : <></>}
                    </div>
                </div>
                <div className='toggleContainer'>
                    <div className={toggle ? "togglePlus": "toggleMinus"} onClick={()=>setToggle(!toggle)}/>
                </div>
            </div>
            <hr className="divider"></hr>
        </div>
    )
}