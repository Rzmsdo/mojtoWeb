import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";


export default function Hero() {

    const videoRef = useRef();

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });


    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {        
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.2,
    });

    gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.2,
        delay: 1,
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    })
    .to('.left-leaf', { y: 300 }, 0)
    .to('.right-leaf', { y: -300}, 0) //, rotation: 15, duration: 1.8, ease: "expo.out" 

    const startValue = isMobile ? 'top 50%' : 'center 60%' ;
    const endValue = isMobile ? '120% top' : 'bottom top';

    // video animation
    const videoTimelineRef = gsap.timeline({
        scrollTrigger: {
            trigger: 'video',
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true,
            
        }
    })
    videoRef.current.onloadedmetadata = ()=> {
        videoTimelineRef.to(videoRef.current, {
            currentTime: videoRef.current.duration
        })
    }




}, []);
   

    return (
        <>
        <section id="hero" className="noisy">
            <h1 className="title">Mojito Cafe</h1>
           
           <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
           <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

        <div className="body">
            <div className="content">
             <div className="space-y-5 hidden md:block">
            <p>Cool. Crips. Clásico.</p>
            <p className="subtitle">
                Disfruta del espíritu <br/> del verano
            </p>
            
            </div>
            <div className="view-cocktails">
           
            <p className="subtitle">
                Cada cóctel tiene una historia. <br/> Explora el mundo de los cócteles con nosotros.  
            </p>
            <a href="#cocktails">Ver Cócteles</a>
            </div>
            </div>
        </div>


            </section>

            <div className="video absolute inset-0">
            <video ref={videoRef} src="/videos/output2.mp4" 
            playsInline 
            muted 
            preload="auto"
            />
            
            
            </div>
        </>
    )
}