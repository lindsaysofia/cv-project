function WebsiteDisplay(props) {
  const { websites } = props.data.personalInformation;
  return (
    <div className="websiteDisplay">
      {websites.map((website) => {
        return (
          <div className="websiteDisplay__website">
            <p className="websiteDisplay__websiteName">{website.websiteName}</p>
            <p className="websiteDisplay__websiteLink">{website.websiteLink}</p>
          </div>
        );
      })}
    </div>
  );
}

export default WebsiteDisplay;