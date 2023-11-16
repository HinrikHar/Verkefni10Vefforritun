// React imports
import { useState } from 'react'

//Libraries
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

// Custom components
import CustomForm from './components/CustomForm'
import Markmið from './components/Markmið'

function getSuccessMessage(){
  const messages = ["Vel gert!", "Frábært!", 
  "Hefðir getað gert betur...", "Líður þér ekki vel?!", 
  "Gerðir þú það í alvörunni?", "Til hamingju!", 
  "Stórt skref fyrir þig, lítið fyrir mannkynið"];
  return messages[Math.floor(Math.random()* messages.length)];
}

function App() {
  const [markmid, setMarkmid] = useState("")
  const [isCompleted, setIsCompleted] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false)
    console.log(e);
  }

  const handleInput = (e) => {
    console.log(e.target.value)
    setMarkmid(e.target.value);
  }
  
  const handleCompletedMarkmid = async (e) => {
    e.target.setAttribute('disabled', true);
    setMarkmid(getSuccessMessage());
    await jsConfetti.addConfetti({
      emojis: ["😄", "✅", "⭐️"]
  })
    e.target.removeAttribute('disabled');
    setMarkmid("");
    setIsCompleted(true);
  }

 
  return (
    <main className="grid place-items-center min-h-screen
    bg-gradient-to-b from-slate-100 to-slate-200 
    dark:from-slate-800 dark:to-slate-900 text-slate-900
    dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
      
      { isCompleted && <CustomForm 
      markmid={markmid}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      />}
      {
        !isCompleted && <Markmið markmid={markmid}
        handleCompletedMarkmid={handleCompletedMarkmid}
        />
      }
      </div>
    </main>
  )
}

export default App
