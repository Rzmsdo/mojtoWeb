import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";


const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2',{
            type: 'words'
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut",
        });

        timeline
        .from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02,
        })
        .from('#contact h3, #contact p', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02,
        })
        .from('#f-right-leaf', {
            y: '-50',
            duration: 1,
            easy: 'power1.inOut',
        })
        .from('#f-left-leaf', {
            y: '-150',
            duration: 1,
            easy: 'power1.inOut',
        })
       
    },[])
    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

            <div className="content">
            <h2>Where to Find Us</h2>
<div>
    <h3>Visit our bar</h3>
    <p>Calle Corbeta, Calpe, Spain</p>
</div>
<div>
    <h3>Contact us</h3>
    <p>+34 682 647 917</p>
    <p>direzmas@gmail.com</p>
</div>
<div>
    <h3>Opening Every Day</h3>
    {openingHours.map((item, index) => (
        <p key={index}>{item.day}: {item.time}</p>
    ))}
</div>
<div>
    <h3>Follow us on Social Media</h3>
    <div className="flex-center gap-5">
        {socials.map((social, index) => (
            <a key={index} href={social.url}
            target="_blank" rel="noopener noreferrer"
            aria-label={social.name}>
                <img src={social.icon} alt={social.name} />
            </a>
        ))}
    </div>

            </div>
            </div>
        </footer>
    );
};

export default Contact;