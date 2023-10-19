import Brand from '../../assets/images/logo.svg'
export default function Header() {

  return (
    <header>
      <img src={Brand} alt="sunnyside logo" />
      <nav>
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
    </header>

  )
}