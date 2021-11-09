import "../styles/Header.css";

function Header(props) {
  const {
    firstName,
    lastName,
    title,
    description,
   } = props.data.personalInformation;
  return (
    <div className="header">
      <h2 className="header__name">{firstName}{lastName ? ` ${lastName}` : ''}</h2>
      <p className="header__title">{title}</p>
      <p className="header__description">{description}</p>
      <div className="header__photo">
        <img
            alt="Insert Profile Here"
        />
      </div>
    </div>
  );
}

export default Header;