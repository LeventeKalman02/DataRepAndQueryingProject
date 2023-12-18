import { useEffect, useState } from 'react';
import axios from 'axios';
import Quotes from './quotes';

function SavedQuotes(){

    /* create the data and setData methods to use below to display the quotes array */
    const [data, setData] = useState([]);

    /* promise */
    useEffect(
        ()=>{
            /* Get the data from the http link */
            axios.get('http://localhost:4000/quoteapi/quotes')
            .then(/* callback function */
                (response)=>{/* get the data response from the http */
                    setData(response.data)/* pass the data to setQuoteData to display the quotes array */
            }
            )
            .catch(/* display the error in the console if there is one */
                (error)=>{
                    console.log(error);
                }
            )
        }, []
    );

    const Reload = (e) => {
        axios.get('http://localhost:4000/quoteapi/quotes')
            .then(/* callback function */
                (response) => {/* get the data response from the http */
                    setData(response.data)/* pass the data to setData to display the quotes array */
                }
            )
            .catch(/* display the error in the console if there is one */
                (error) => {
                    console.log(error);
                }
            )
    };

    return(
        <div>
            <Quotes myQuotes={data} reloadData={Reload}></Quotes>
        </div>
    );

}

export default SavedQuotes;