import { useState } from "react"
import './App.css'

function App() {
  const [selectedTeam, setSelectedTeam] = useState("GT");
  const [selectedTeamImg, setSelectedTeamImg] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYodJaAAkYsHhZghXsLWOa3xNOYnMFhieUrw&usqp=CAU");

 
const ChangeTeam = (team, imgLink) => {
  setSelectedTeam(team);
  setSelectedTeamImg(imgLink);
}

  return (
    <>
      <div>
        <ul className="flex gap-10 mx-auto bg-slate-600 justify-center p-10">

          <li className="bg-teal-500 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-teal-700" onClick={()=>{ ChangeTeam("GT", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYodJaAAkYsHhZghXsLWOa3xNOYnMFhieUrw&usqp=CAU")}}> GT </li>
          
          <li className="bg-teal-500 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-teal-700" onClick={() => { ChangeTeam("KKR", "https://m.economictimes.com/thumb/msid-99120720,width-1200,height-900,resizemode-4,imgsize-119668/ipl-2023-kkr-team-review-check-kolkata-knight-riders-strengths-weaknesses-and-key-players.jpg") }}>KKR</li>
          <li className="bg-teal-500 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-teal-700" onClick={() => { ChangeTeam("MI", "https://staticg.sportskeeda.com/editor/2023/12/f556e-17030116826736-1920.jpg?w=840") }}>MI</li>
          <li className="bg-teal-500 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-teal-700" onClick={() => { ChangeTeam("RCB", "https://www.royalchallengers.com/PRRCB01/public/styles/817x545_landscape/public/2020-03/RCBSquadWeb.jpg?h=920929c4&itok=GK65M_OV") }}>RCB</li>
        </ul>

        <div className="flex flex-col items-center py-10 gap-10 bg-gray-400">
          <h1 className="font-bold">{selectedTeam}</h1>
          <div className="h-52 w-52 bg-green-300 rounded-sm">
            <img src={selectedTeamImg} className="h-full w-full" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
