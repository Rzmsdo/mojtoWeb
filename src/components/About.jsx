import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all";


export default function About() {

    useGSAP(() => {
      const titleSplit = SplitText.create('#about h2',{
        type: 'words'
      }) 
      
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          start: 'top center',
        }

      })
        scrollTimeline
        .from(titleSplit.words, {
          opacity: 0,
          yPercent: 100,
          duration: 1,
          ease: "expo.out",
          stagger: 0.02,
        })
        .from('.top-grid div, .bottom-grid div',{
            opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04
        },'-=0.5')
    
    },[])

    return (
        <div id="about">
            <div  className="mb-16 md:px-0 px-5"  >
                <div className ="content">
                    <div className= "md:col-span-8">
                        <p className="badge">Nuestros mejores Cocteles</p>
                        <h2>Dónde cada detalle importa <span className="text-white">- </span>
                         desde el macerado hasta la guarnición
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            En nuestro bar de cócteles, creemos que cada detalle importa a la hora de crear la bebida perfecta. 
                            Desde el macerado de ingredientes frescos hasta la guarnición final, 
                            nos enorgullecemos de crear cócteles que no solo son deliciosos, sino también visualmente impresionantes. 
                            Nuestros hábiles mixólogos seleccionan cuidadosamente cada ingrediente y prestan 
                            atención a cada paso del proceso para garantizar que cada sorbo sea una experiencia deliciosa.                             
                        </p>
                        <div >
                            <p className="md:text-3xl text-xl font-bold">
                            <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                Más de 12000 clientes
                            </p>
                        </div>

                    </div>
                </div>

            </div>
            <div className="top-grid">
                <div className="md:col-span-6">
                    <div className="noisy"/>
                    <img src="images/abt1.png" alt ="grid-img-1"/> 

                </div>
                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="images/abt2.png" alt ="grid-img-2"/> 

                </div>
                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="images/abt5.png" alt ="grid-img-5"/> 

                </div>
            </div>
                    <div className="bottom-grid">
                        <div className="md:col-span-8">
                    <div className="noisy"/>
                    <img src="images/abt3.png" alt ="grid-img-3"/> 

                </div>
                    
                       <div className="md:col-span-4">
                    <div className="noisy"/>
                    <img src="images/abt4.png" alt ="grid-img-4"/> 

                </div>
                    
                

                    
            </div>
        </div>
    )
}