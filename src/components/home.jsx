import React, { useState, useEffect } from "react";
import './home.css';
import axios from "axios"
function Home(){
    const [quote, setQuote] = useState("");
    async function display(){
        try{
        const q = await axios.get("https://dummyjson.com/quotes/random");
        setQuote(q.data.quote);
        console.log(q.data);
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <div className="container">
            <div className="quote-box">
                <p>{quote}</p>
            </div>
            <button onClick={display}>Give an advice</button>
        </div>
    );
}
export default Home;