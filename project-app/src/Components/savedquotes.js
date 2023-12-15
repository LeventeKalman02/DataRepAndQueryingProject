import { useEffect, useState } from 'react';
import axios from 'axios';
import Quotes from './quotes';

function SavedQuotes(){

    /* create the data and setData methods to use below to display the quotes array */
    const [quoteData, setQuoteData] = useState([]);

    /* promise */
    useEffect(
        ()=>{
            /* Get the data from the http link */
            axios.get('http://localhost:4000/quoteapi/quotes')
            .then(/* callback function */
                (response)=>{/* get the data response from the http */
                setQuoteData(response.data)/* pass the data to setQuoteData to display the quotes array */
                console.log(response.data)
            }
            )
            .catch(/* display the error in the console if there is one */
                (error)=>{
                    console.log(error);
                }
            )
        }, []
    );

    return(
        <div>
            <Quotes myQuotes = {quoteData}></Quotes>
            {console.log(quoteData)}
        </div>
    );

}

export default SavedQuotes;