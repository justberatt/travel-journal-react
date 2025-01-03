import globeLogo from '../assets/globe.svg'
function Header() {
    return (
        <header>
            <img src={globeLogo} alt="globe icon" className='logo'></img>
            <h1>my travel journal</h1>
        </header>
    )
}

export default Header