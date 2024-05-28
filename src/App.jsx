import { useState } from 'react'
import './App.css'
const getNum = ()=>{
  const list =[]
for(let i=1; i<=8; i++){
  list.push(i)
  list.push(i)
}
return list
}

function App() {
  const [stage, setStage] = useState('init')
  const [nums,setNums] = useState(getNum())
  const [open,setOpen] = useState([])
  const [solved,setSolvedList] =useState()

  const randomNums = ()=>{
    const copyNum = [...nums];

    return copyNum.sort(()=>Math.random()-0.5)


  }
const handleClick =(num,index)=>{
  if(open.length<=2){
    console.log(open)

   return setOpen((prev)=>[...prev,index])
  
  }


}
  // [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]

 
  // 4*4
 

  return (
  
    <div className='App'>
      <h1>Memory Game</h1>
      {
        stage==="init" && <button 
        onClick={()=>
          {
            
            setStage('start')
            const randomList = randomNums()
            console.log(randomList)
            setNums(randomList)
          
          }}
        >Play Game</button>
      }
      {
        stage === "start" && <div className='game'>

          <div className="cards">
           {
            nums.map((num,i)=>{
              return(
                <div
                key={i}
                onClick={()=>{
                  handleClick(num,i)
                }}
                className={'card'}>
{num}
                  </div>

              )
            })
           }
          </div>
        </div>
      }
        {
        stage === "win" && <div>
          <h1>You won thw game</h1>
          <button>Play Again</button>
        </div>
      }
    </div>
  )
}

export default App
