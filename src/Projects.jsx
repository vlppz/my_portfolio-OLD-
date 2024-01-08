import { CardCustom, ButtonSimple } from './Components'
import { DiGithubBadge } from 'react-icons/di'

function Projects() {
    return (
        <main className='pxl-10 pb-10'>
            <div className='flex justify-center items-center'>
                <div className="text-7xl p-4 bg-purple-200 dark:bg-slate-200 dark:hover:bg-white dark:hover:shadow-gray-700 rounded-xl transition-all ease-in-out duration-500 hover:-translate-y-1 hover:shadow-purple-200 hover:shadow-2xl hover:bg-purple-300">
                    <img src="./work.png" alt="hand" className="h-20" />
                </div>
            </div>
            <h1 className="font-light text-4xl text-center mt-4 dark:text-gray-300">My projects</h1>
            <div className="ml-10 mr-10 sm:ml-32 sm:mr-32 mt-10">
                <CardCustom name="URL Shortener" desc="A simple url shortener written in python, and it uses sqlite3 as a database." custom={<ButtonSimple onClick={() => { window.location.href = "https://github.com/VladimirPapazov88/miniurl" }} text={<DiGithubBadge className="text-4xl" />} />} />

                <CardCustom className="mt-10" name="Words game" desc={<span>Multiuser words game written in python. It's in Russian.</span>} custom={<ButtonSimple onClick={() => { window.location.href = "https://github.com/VladimirPapazov88/flask_form" }} text={<DiGithubBadge className="text-4xl" />} />} />

                <CardCustom className="mt-10" name="Silaeder Conference" desc={<span>Web-service for my school that helps to organize conferences with tools like automatic schedule creation, presentation shower, etc.</span>} custom={<ButtonSimple onClick={() => { window.location.href = "https://github.com/silaedr-info/silaeder-conference" }} text={<DiGithubBadge className="text-4xl" />} />} />
            </div>
        </main>
    )
}

export { Projects }