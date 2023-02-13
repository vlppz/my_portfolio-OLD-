import { CardCustom, ButtonSimple } from './Components'
import { DiGithubBadge } from 'react-icons/di'

function Projects() {
    return (
        <main className='pxl-10 pb-10'>
            <div className='flex justify-center items-center'>
                <div className="text-7xl p-4 bg-purple-200 rounded-xl transition-all ease-in-out duration-500 hover:-translate-y-1 hover:shadow-purple-100 hover:shadow-2xl">
                    <img src="./work.png" alt="hand" className="h-20" />
                </div>
            </div>
            <h1 className="font-light text-4xl text-center mt-4">My projects</h1>
            <div className="ml-32 mr-32 mt-10">
                <CardCustom name="URL Shortener" desc="A simple url shortener written in python, and it uses sqlite3 as a database." custom={<ButtonSimple onClick={() => { window.location.href = "https://github.com/VladimirPapazov88/miniurl" }} text={<DiGithubBadge className="text-4xl" />} />} />

                <CardCustom className="mt-10" name="Guitar school site" desc="My first website with a good design. But it's in Russian." custom={<ButtonSimple onClick={() => { window.location.href = "https://github.com/VladimirPapazov88/guitarschoolsite" }} text={<DiGithubBadge className="text-4xl" />} />} />

                <CardCustom className="mt-10" name="My old portfolio" desc="The first portfolio website that I've ever made. It's in Russian too." custom={<ButtonSimple onClick={() => { window.location.href = "https://github.com/VladimirPapazov88/my-website-portfolio" }} text={<DiGithubBadge className="text-4xl" />} />} />

                <CardCustom className="mt-10" name="Multiuser counter" desc="Multiuser counter written on java spring boot." custom={<ButtonSimple onClick={() => { window.location.href = "https://github.com/VladimirPapazov88/counter-java" }} text={<DiGithubBadge className="text-4xl" />} />} />

                <CardCustom className="mt-10" name="Words game" desc="Multiuser words game written in python. It's in Russian." custom={<ButtonSimple onClick={() => { window.location.href = "https://github.com/VladimirPapazov88/flask_form" }} text={<DiGithubBadge className="text-4xl" />} />} />
            </div>
        </main>
    )
}

export { Projects }