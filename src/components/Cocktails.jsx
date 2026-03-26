import { cocktailLists, mockTailLists } from "../../constants"


export const Cocktails = () => {
    return (
        <section id='cocktails' className="noisy">
            <img src="public/images/cocktail-left-leaf.png" alt="l-leaf" className="c-left-leaf" />
            <img src="public/images/cocktail-right-leaf.png" alt="r-leaf" className="c-right-leaf" />

            <div className=" list">
                <div className="popular">
                    <h2 >Most popular cocktails:</h2>
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
                    <h2 >Most loved cocktails:</h2>
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