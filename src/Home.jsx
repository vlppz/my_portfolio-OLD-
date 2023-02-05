import { Card } from './Components'

function Home() {
    return (
        <main className='pxl-10 pt-5 pb-10'>
            <div className='flex justify-center items-center'>
                <div className="text-7xl p-4 bg-purple-200 rounded-xl transition-all ease-in-out duration-500 hover:rotate-12">
                    <img src="./hand.png" alt="hand" className="h-20" />
                </div>
            </div>
            <h1 className="font-light text-4xl text-center mt-4">Hello, my name is Vladimir!</h1>
            <p className="text-xl text-center mt-3 font-light">I live in Moscow, and I like to be a frontend developer.<br />I've done some projects and you can see them in this portfolio.</p>
            <h1 className="text-2xl text-center mt-10">My favourite tools:</h1>
            <div className='flex items-center justify-center mt-5 flex-col'>
                <Card name="React" desc="A Js framework. The coolest feature that React provides is components. This makes your code cleaner, and you don't have to use repeating code blocks." className="w-2/4" img_src="/react.svg" />
                <Card name="Tailwind" desc="A CSS framework that defines classes such as flex, pt-4, and text-center and prevents you from writing unnecessary CSS code. And again, this cleans up your code." img_src="/tailwindcss.svg" className="w-2/4 mt-10" />
                <Card name="Flask" desc="A Python 3 library for making web apps. It has a templating system called Jinja. And I use it for writing APIs for my apps." img_src="/flask.svg" className="w-2/4 mt-10" />
            </div>
        </main>
    )
}

export { Home };