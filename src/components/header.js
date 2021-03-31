import Logo from '../assets/logo.png'

const image = {
  width: '30px',
  height: '30px',
  paddingTop: '30px',
  paddingLeft: '20px',
}

function Header() {
  return (
    <div>
      <img src={Logo} style={image} />
    </div>
  )
}

export default Header
