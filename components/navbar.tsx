export default function NavBar() {
    return(<nav className="flex sm:justify-center space-x-4">
        {[
            ['Home', '/'],
            ['About', '/about'],
            ['User', '/user'],
        ].map(([title, url]) => (
            <a href={url} className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
    </nav>)
}; 