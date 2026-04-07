import { cocktailLists, mockTailLists } from "../../constants"
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { use } from "react";


export const Cocktails = () => {

useGSAP(() => {
     const parallaxTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#cocktails',
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true,
        }
    })
    parallaxTimeline
    .from('.c-left-leaf', { x: -200, y: 100 }, 0)
    .from('.c-right-leaf', { x: 200, y:-100}, 0) //, rotation: 15, duration: 1.8, ease: "expo.out"
}, [])


    return (
        <section id='cocktails' className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" className="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" className="c-right-leaf" />

            <div className=" list">
                <div className="popular">
                    <h2 >los cocteles más solicitados:</h2>
                    <ul>
                        {cocktailLists.map((drink) => (
                            <li key={drink.name}>
                                <div className="md:me-28">
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="loved">
                    <h2 >los cocteles más amados:</h2>
                    <ul>
                        {mockTailLists.map((drink) => (
                            <li key={drink.name}>
                                <div className="me-28">
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    )
}