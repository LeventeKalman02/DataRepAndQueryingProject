import { useState } from "react";
import axios from "axios";

function AddFav(){

    /* create the arrays for adding favourite quotes */
    const [title, setQuoteTitle] = useState([]);
    const author = localStorage.getItem("author");
    const quote = localStorage.getItem("quote");

    /* handles the submit and prints it to console */
    const handlesubmit = (e) => {
        e.preventDefault();

        console.log("Title: "+title+
        " Author: "+author);

        const quoteSaveData = {            
            "title":title,
            "author":author,
            "quote":quote
        }

        //sends the data to quoteSaveData and redirect the user to savedQuotes if successful
        axios.post('http://localhost:4000/quoteapi/quotes',quoteSaveData)
        .then(response => {
            console.log("RESPONSE", response)
            window.location.href = "/savedQuotes";
        })
        .catch(error => console.error("ERROR", error));
    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
                <div className="form-group">{/* add a new quote title */}
                    <label>Edit Quote Title: </label>
                    <input required type="text"
                        id="quoteTitleInput"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setQuoteTitle(e.target.value) }}>{/* when event changes run setQuoteTitle */}
                    </input>
                </div>            
                <div className="form-group">{/* add a new book author */}
                    <label>Quote Author: </label>
                    <input disabled type="text"
                        id="quoteAuthorInput"
                        className="form-control"
                        value={author}>
                    </input>
                </div>

                <div className="form-group">{/*Bring the Quote from the previous page and display*/}
                    <label>Quote You Are Saving: </label>
                    <input disabled type="text"
                        id="quoteInput"
                        className="form-control"
                        value={quote}>
                    </input>
                </div>

                <div>{/* submit button */}
                <br></br>
                    <input type="submit"
                        value="Save Quote!">
                    </input>
                </div>
            </form>
        </div>
    )
}

export default AddFav;