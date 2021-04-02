import Logo from "../assets/logo.png";

const image = {
  width: "30px",
  height: "30px",
  paddingTop: "30px",
  paddingLeft: "30px",
};

function Header() {
  return (
    <div>
      <img src={Logo} style={image} alt="Home" />
    </div>
  );
}

export default Header;
