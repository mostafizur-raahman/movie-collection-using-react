import { useState } from "react"
import Card from "./components/Card/Card"
import Contact from "./components/Contact/Contact"
import Navbar from "./components/Navbar/Navbar"
import SideCard from "./components/SideCard/SideCard"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime, setWatchTime] = useState("");
  const handlewatchTime = (watchTime) => {
    // local storage er kaj karbar

    const previousWatcTime = JSON.parse(localStorage.getItem("watchTime"));
    console.log(previousWatcTime);
    if (previousWatcTime) {
      const sumWatchTime = previousWatcTime + watchTime;
      localStorage.setItem("watchTime", sumWatchTime);
      setWatchTime(sumWatchTime);
    }
    else {
      localStorage.setItem("watchTime", watchTime);
      setWatchTime(watchTime)
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div>

        <div className="md:flex grid justify-between w-full gap-3">
          <div className="md:w-3/4  border-2">
            <Card handlewatchTime={handlewatchTime}></Card>
          </div>
          <div className="md:w-1/4  border-2">
            <SideCard watchTime={watchTime}></SideCard>
          </div>
        </div>
      </div>
      <Contact />
      <ToastContainer />
    </div>
  )
}

export default App
