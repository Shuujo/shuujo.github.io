import RepeatPopup from './RepeatPopup.jsx';


export default function Hero() {

    return (
        <section id="hero" className="hero">

            <p className="eyebrow">
                Based in Calgary, Alberta
            </p>
            <h1 className="wave-text">
                <span>j</span>
                <span>o</span>
                <span>s</span>
                <span>h</span>
            </h1>

            <h1 className="cursive-text">
                Creative Designer
            </h1>

            <h1 className="wave-text">
                <span>p</span>
                <span>a</span>
                <span>h</span>
                <span>a</span>
                <span>n</span>
                <span>g</span>
            </h1>


            <p className="hero-description">
                Hello! My name is Josh and this is my portfolio website! I am currently seeking Entry-Level opportunities in the Graphic Design and UX/UI Design fields. Please feel free to contact me if you have any questions about me or my work!
            </p>


            {/* <a href="#projects" className="button">
                View My Work
            </a> */}
        </section>
    );
}