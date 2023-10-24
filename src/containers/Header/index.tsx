import { useState } from 'react'
import Brand from '../../assets/images/logo.svg'



export default function Header() {
  const [menu, setmenu] = useState(false)


  return (
    <header>
      <img src={Brand} alt="sunnyside logo" />
      <nav className={menu ? 'menu-open' : ''}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <button>contact</button>
          </li>
        </ul>
      </nav>
      <label htmlFor="hamburguer-menu">
        <input type="checkbox" name="hamburguer-menu" id="hamburguer-menu" onChange={() => setmenu(!menu)}/>
      </label>
    </header>

  )
}