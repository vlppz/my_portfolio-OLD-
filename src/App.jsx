import { useState } from 'react';
import './App.css';
import { Button, Link } from './Components'
import { DiGithubBadge } from 'react-icons/di'
import { Home } from './Home'
import { Projects } from './Projects'

function App() {
    const [active, setActive] = useState("1");

    function goToGH() {
        window.location.href = "https://github.com/VladimirPapazov88"
    }

    return (
        <div>
            <nav className="p-5 bg-white text-black flex justify-between items-center fixed top-0 w-screen bg-opacity-30 backdrop-blur-md z-10">
                <p className="text-xl font-bold">My Portfolio</p>
                <div>
                    {active === "1" ?
                        <Link active={true} className="mr-10" text="Home"></Link>
                        : <Link className="mr-10" onClick={() => {setActive("1")}} text="Home"></Link>}

                    {active === "2" ?
                        <Link active={true} text="My Projects"></Link>
                        :  <Link text="My Projects" onClick={() => {setActive("2")}}></Link>}
                </div>
                <Button onClick={goToGH} text={<span className="flex items-center"><DiGithubBadge className="text-2xl mr-1"/> Github</span>}></Button>
            </nav>

            <main className="mt-28">
                {active === "1" ?
                    <Home />
                    : <Projects />}
            </main>
        </div>
    )
}

export default App;