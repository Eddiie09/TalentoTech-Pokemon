import React from "react";
import { useSelector } from "react-redux";

const TeamPage =() =>{
    const team = useSelector(state => state.team.value)
    console.log(team)
    return (
        <>
        </>
    )
}

export default TeamPage