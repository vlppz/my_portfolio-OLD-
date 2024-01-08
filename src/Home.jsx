import { Card } from './Components'

function Home() {
    return (
        <main className='pxl-10 pt-5 pb-10'>
            <div className='flex justify-center items-center'>
                <div className="text-7xl p-4 bg-purple-200 dark:bg-slate-200 rounded-xl transition-all ease-in-out duration-500 hover:rotate-12">
                    <img src="./hand.png" alt="hand" className="h-20" />
                </div>
            </div>
            <h1 className="font-light text-4xl text-center mt-4 dark:text-gray-300">Hello, my name is Vladimir!</h1>
            <p className="text-xl text-center mt-3 font-light dark:text-gray-300">I live in Moscow, and I like to be a frontend developer.<br />I've done some projects and you can see them in this portfolio.</p>
            <h1 className="text-2xl text-center mt-10 dark:text-gray-300">My favourite tools:</h1>
            <div className='flex items-center justify-center mt-5 flex-col'>
                <Card name="React" desc="Library for web and native user interfaces that lets you build user interfaces out of individual pieces called components." className="w-3/4 sm:w-2/4" img_src="/react.svg" />
                <Card name="NextJS" desc="React framework that enables you to create full-stack Web applications by extending the latest React features" className="w-3/4 sm:w-2/4 mt-10" img_src="/next-js.svg" />
                <Card name="Tailwind" desc="A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup." img_src="/tailwindcss.svg" className="w-3/4 sm:w-2/4 mt-10" />
                <Card name="Prisma" desc="An ORM that unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion." img_src="/prisma-svgrepo-com.svg" className=" w-3/4 sm:w-2/4 mt-10" />
            </div>
        </main>
    )
}

export { Home };