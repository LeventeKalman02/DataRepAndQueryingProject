import axios from 'axios';
import Quotes from './quotes';

function readQuotes(){

    /* create the data and setData methods to use below to display the quotes array */
    const [quoteData, setQuoteData] = useState([]);

    /* promise */
    useEffect(
        ()=>{
            /* Get the data from the http link */
            axios.get('http://localhost:4000/quoteapi/quotes')
            .then(/* callback function */
                (response)=>{/* get the data response from the http */
                setQuoteData(response.quoteData)/* pass the data to setData to display the quotes array */
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
            <Books myQuotes = {quoteData}></Books>

        </div>
    );

}

export default readQuotes;