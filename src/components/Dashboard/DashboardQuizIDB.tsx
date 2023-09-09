import React from 'react'
import IdbQuestionCard from './addIdbItem/IdbQuestionCard'

function DashboardQuizIDB(props:{setQuest:(value:number)=>void,setError:(value:string)=>void, quest:number}) {
  
  return (
    <div className="w-full flex justify-center items-center">
       <IdbQuestionCard setQuest={props.setQuest} setError={props.setError} quest={props.quest}/>
    </div>
     
  )
}

export default DashboardQuizIDB
