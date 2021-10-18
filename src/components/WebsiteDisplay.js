function WebsiteDisplay(props) {
  const { websites } = props.data.personalInformation;
  return (
    <div className="websiteDisplay">
      {websites.map((website) => {
        return (
          <div className="websiteDisplay__website">
            <h3 className="websiteDisplay__websiteName">{website.websiteName}</h3>
            <a 
              className="websiteDisplay__websiteLink" 
              href={website.websiteLink} 
              target="_blank" 
              rel="noreferrer"
            >{website.websiteLink}</a>
          </div>
        );
      })}
    </div>
  );
}

export default WebsiteDisplay;