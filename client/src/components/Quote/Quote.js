import React, {useState} from "react";

function Quote(props) {
    const [quote, setQuote] = useState(props.quoteText)

    return (
        <div class="col-sm-4 mb-2">
            <div class="card">
                <div class="card-body">
                    <p class="card-text">{ quote }</p>
                </div>
            </div>
        </div>
    )
}

export default Quote;