import Section from "../Section/Section";
import classes from "./About.module.css";

const About = () => {
  return (
    <Section className={classes.About}>
      <h1>About Us</h1>
      <p>
        A remarkable about page is genuine, approachable, and distinguished. It
        should give the visitor a glimpse into what working with you might be
        like. You can include personal interests, stories, and photos that
        convey the unique story of your business. You may also include
        information about who’s on your team and what their roles are. About
        pages are personal to you and your company, so the structure of your
        about page will vary based on what you want to highlight. However,
        you’ll start with the same writing process. Your about page can and will
        be more comprehensive than a single mission statement. However, to draw
        people in, you need to succinctly state your goal in the industry up
        front. What is your business here to do? Why should your website
        visitors care? This information will give the reader something to
        remember about your company long after they leave your website.
      </p>
    </Section>
  );
};

export default About;
