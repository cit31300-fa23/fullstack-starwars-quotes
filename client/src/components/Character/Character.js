import React, {useState, useEffect} from "react";
import Quote from "src/components/Quote/Quote";
import axios from 'axios';
import { nanoid } from 'nanoid';

function Character(props) {
    const [quotes, setQuotes] = useState([])

    // Add hook to contact API and retrieve quotes for this character
    useEffect(() => {
        // Define a function that contacts the API and retrieves data
        const loadQuotes = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/quotes/character/${props.name}`)
                setQuotes(() => [...response.data]);
            }
            catch (error) {
                console.log('Error!');
            }
            
        };

        // Call the function
        loadQuotes();
    }, []);

    const quotesList = quotes.map((quote) => <Quote 
    quoteText={ quote } 
    id={ `quote-${nanoid()}` }
    key={ `quote-${nanoid()}` }
    />)

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