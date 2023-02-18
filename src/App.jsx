import { useEffect, useState } from 'react';
import './App.css';
import { Button, Link } from './Components'
import { DiGithubBadge } from 'react-icons/di'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { Home } from './Home'
import { Projects } from './Projects'
import Cookies from 'universal-cookie'

function App() {
    const [active, setActive] = useState("1");
    const [dark, setDark] = useState(false);
    const cookies = new Cookies();

    /* eslint-disable */
    useEffect(() => {
        if (cookies.get("dark") === "true") {
            setDark(true);
            switchMode();
        }
    }, [])
    /* eslint-enable */

    function goToGH() {
        window.location.href = "https://github.com/VladimirPapazov88"
    }

    function switchMode() {
        if (!dark) {
            document.getElementsByTagName("html")[0].classList.add("dark");
            cookies.set("dark", "true");
            setDark(true);
        } else {
            document.getElementsByTagName("html")[0].classList.remove("dark");
            cookies.set("dark", "false");
            setDark(false);
        }
    }

    return (
        <div>
            <nav className="p-5 bg-white dark:bg-gray-900 dark:text-gray-300 text-black flex justify-between items-center fixed top-0 w-screen bg-opacity-30 backdrop-blur-md dark:bg-opacity-30 z-10">
                <p className="text-xl font-bold">My Portfolio</p>
                <div className='text-center'>
                    {active === "1" ?
                        <Link active={true} className="mr-10" text="Home"></Link>
                        : <Link className="mr-10" onClick={() => { setActive("1") }} text="Home"></Link>}

                    {active === "2" ?
                        <Link active={true} text="My Projects"></Link>
                        : <Link text="My Projects" onClick={() => { setActive("2") }}></Link>}
                </div>
                <div className='flex items-center'>
                    <Button onClick={switchMode} className="h-10 mr-2" text={dark === false ? <BsFillSunFill /> : <BsFillMoonStarsFill />}></Button>
                    <Button onClick={goToGH} text={<span className="flex items-center"><DiGithubBadge className="text-2xl mr-1" /> Github</span>}></Button>
                </div>
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