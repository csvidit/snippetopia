const H1 = (props: {children: React.ReactNode, className?: string}) => {
    return (<h1 className={`text-2xl lg:text-4xl text-indigo-600 ${props.className}`}>{props.children}</h1>)
}

export default H1;