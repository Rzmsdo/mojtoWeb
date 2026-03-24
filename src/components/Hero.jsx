

export default function Hero() {
    return (
        <>
        <section id="hero" className="noisy">
            <h1 className="title">Mojito</h1>
           
           <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
           <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

        <div className="body">
            <div className="content">
             <div className="space-y-5 hidden md:block">
            <p>Cool. Crips. classic.</p>
            <p className="subtitle">
                Sip the spirit <br/> of Smmer
            </p>
            
            </div>
            <div className="view-cocktails">
           
            <p className="subtitle">
                Every cocktail has a story. <br/> Explore the world of cocktails with us.  

            </p>
            </div>
            </div>
        </div>


            </section>
        </>
    )
}