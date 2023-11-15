import React, {useState} from "react";
import Quote from "src/components/Quote/Quote";

function Character(props) {
    const [quotes, setQuotes] = useState(props.quotes)

    const quotesList = quotes.map((quote) => <Quote quoteText={ quote } />)

    return (        
        <div class="row border rounded p-4 m-2">
            <div class="row">
                <h1>{ props.name }</h1>
            </div>
                { quotesList }
        </div>
    )
}

export default Character;