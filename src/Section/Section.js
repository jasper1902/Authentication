import classes from "./Section.module.css";

const Section = (props) => {
  return (
    <div className={`${classes.Section} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Section;
