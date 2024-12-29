const Footer = ({ children }) => {
  const footerStyles = {
    height: "100px", // wysokość 100px
    width: "100%", // szerokość 100%
    backgroundColor: "#c3e6cb", // kolor tła
    display: "flex", // flexbox
    justifyContent: "center", // wyśrodkowanie w poziomie
    alignItems: "center", // wyśrodkowanie w pionie
  };

  return (
    <div className="footer" style={footerStyles}>
      {children}
    </div>
  );
};

export default Footer;
