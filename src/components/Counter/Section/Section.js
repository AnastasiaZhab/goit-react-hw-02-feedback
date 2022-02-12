import "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Section;
