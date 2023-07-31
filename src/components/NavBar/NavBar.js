import logo from './assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <nav className="bg-zinc-900 flex h-36">
            <img className="flex-initial ms-3 rounded-full w-36 h-36 self-center" src={logo} alt="logo"/>
            <div className="flex-auto self-center">
                <button type="button" className="w-52 drop-shadow-lg bg-gradient-to-r from-zinc-800 rounded-md text-2xl p-2 m-6 text-stone-100">Aceites</button>
                <button type="button" className="w-52 drop-shadow-lg bg-gradient-to-r from-zinc-800 rounded-md text-2xl p-2 m-6 text-stone-100">Conservas</button>
                <button type="button" className="w-52 drop-shadow-lg bg-gradient-to-r from-zinc-800 rounded-md text-2xl p-2 m-6 text-stone-100">Vinos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;