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

export { Button, Link }