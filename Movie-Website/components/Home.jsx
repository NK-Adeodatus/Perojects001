import { Link } from "react-router-dom";

export default function Home() {
    console.log("hello 6");
    
    return (
        <main className="home-main">
            <div className="main-container">

            <h1>Find Movies Online</h1>
            <Link to='/movies'>
            <button className="home-btn">Go To Movies</button>
            </Link>
            <div className="main-paragraph">

                <p className="paragraph-content">
                    There is never a shortage of free movie sites. As the demand to watch movies online and watch series online has sharply increased recently, more and more free movies sites have come on the scene. That sounds like great news for movie fans, especially when millions of us are suffering from lockdown and poor financial situations. However, not all sites are good enough and safe. Some sites can do you more harm than good as they are filled with malicious ads. That is why it is extremely important to find a safe site to watch movies and TV shows online for free. And if you have not found one, give Hurawatch a check. We promise you will not regret it! 


                    
                </p>
            </div>
            </div>
        </main>
    )
}