import { useState } from "react";
import axios from "axios";

function AddFav(){

    /* create the arrays for adding favourite quotes */
    const [quoteTitle, setQuoteTitle] = useState([]);
    const [quoteAuthor, setQuoteAuthor] = useState([]);

    /* handles the submit and prints it to console */
    const handlesubmit = (e) => {
        e.preventDefault();

        console.log("Title: "+quoteTitle+
        " Author: "+quoteAuthor);

        const quoteSaveData = {
            quoteTitle:quoteTitle,
            quoteAuthor:quoteAuthor
        }

        axios.post('http://localhost:4000/quoteapi/quotes',quoteSaveData)
        .then()
        .catch();
    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
            <div className="form-group">{/* add a new quote title */}
                <label>Edit Quote Title: </label>
                <input type="text"
                    className="form-control"
                    value={quoteTitle}/* initial value */
                    onChange={(e) => { setQuoteTitle(e.target.value) }} />{/* when event changes run setQuoteTitle */}
            </div>
            
            <div className="form-group">{/* add a new book author */}
                <label>Edit Book Author: </label>
                <input type="text"
                    className="form-control"
                    value={quoteAuthor}/* initial value */
                    onChange={(e) => { setQuoteAuthor(e.target.value) }} />{/* when event changes run setQuoteAuthor */}
            </div>

            <div>{/* submit button */}
                <input type="submit"
                    value="Add Book"></input>
            </div>
            </form>
        </div>
    )
}

export default AddFav;