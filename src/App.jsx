import { useState } from 'react';
import './App.css';
import { Button, Link } from './Components'
import { DiGithubBadge } from 'react-icons/di'
import { Home } from './Home'

function App() {
    const [active, setActive] = useState("1");

    function goToGH() {
        window.location.href = "https://github.com"
    }

    return (
        <div className="h-screen">
            <nav className="p-5 bg-white text-black flex justify-between items-center">
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

            <main>
                <Home />
            </main>

            <footer className="fixed bottom-5 text-center w-screen">VladimirPapazov88</footer>
        </div>
    )
}

export default App;