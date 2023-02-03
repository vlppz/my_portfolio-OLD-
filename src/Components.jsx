function Button(props) {
    return (
        <button onClick={props.onClick} className={props.className + ' p-3 rounded-lg text-white hover:bg-gray-800 bg-black transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl'}>{props.text}</button>
    )
}

function Link(props) {
    if (props.active) {
        return (
            <button onClick={props.onClick} className={props.className + ' overline decoration-2 font-bold text-black hover:text-slate-600 transition-all ease-in-out duration-300 transform'}>{props.text}</button>
        )
    } else {
        return (
            <button onClick={props.onClick} className={props.className + ' text-black hover:text-slate-600 transition-all ease-in-out duration-300 transform'}>{props.text}</button>
        )
    }
}

function Card(props) {
    return (
        <div className={props.className + ' bg-gray-100 rounded-lg p-7 shadow-md hover:shadow-xl hover:bg-gray-200 hover:bg-opacity-70 transition-all ease-in-out duration-500 flex flex-row items-center'}>
            <img width="70rem" className="rounded-lg" src={props.img_src} alt='card img' />
            <div className="ml-10">
                <h1 className="text-2xl font-medium">{props.name}</h1>
                <h3>{props.desc}</h3>
            </div>
        </div>
    )
}

export { Button, Link, Card }