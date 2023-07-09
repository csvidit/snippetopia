const Nav = () => {
    return (<div className="flex flex-row fixed top-5 px-5 py-2.5 w-10/12 items-center self-center justify-between rounded-full shadow-2xl shadow-indigo-500">
        <div className="text-indigo-600 font-medium">SNIPPETOPIA</div>
        <div className="flex flex-row space-x-5 text-sm text-gray-500">
            <div>All Snippets</div>
            <div>Framer Motion</div>
            <div>TailwindCSS</div>
            <div>Next.js</div>
        </div>
    </div>)
}

export default Nav;