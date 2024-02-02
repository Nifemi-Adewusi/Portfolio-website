/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid  md:grid-cols-2 gap-16">
        <img src={aboutSvg} className="w-full h-64" alt="" />
        <article>
          <SectionTitle text="code and coffee"></SectionTitle>
          <p className="text-slate-600 mt-8 leading-loose">
            Passionate programmer with a caffeine-fueled drive to craft elegant
            and efficient solutions. I thrive in the challenge of transforming
            complex problems into lines of code that sing. Beyond technical
            expertise, I bring a deep understanding of user needs and a
            dedication to building software that makes a difference. When I'm
            not coding, you'll find me exploring new technologies and honing my
            skills. They say code is poetry for the digital age. I write sonnets
            in semicolons, haikus in hashtags. Coffee fuels my creativity, and
            the click-clack of the keyboard is my symphony. More than just lines
            on a screen, I build experiences, solve problems, and push the
            boundaries of what's possible. Join me on this digital adventure,
            and let's create something extraordinary.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
