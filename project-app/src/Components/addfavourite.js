import { useState } from "react";

function AddFav(){

    /* create the arrays for adding favourite quotes */
    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);

    /* handles the submit and prints it to console */
    const handlesubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
            <div className="form-group">{/* add a new book title */}
                <label>Edit Quote Title: </label>
                <input type="text"
                    className="form-control"
                    value={title}/* initial value */
                    onChange={(e) => { setTitle(e.target.value) }} />{/* when event changes run setTitle */}
            </div>
            
            <div className="form-group">{/* add a new book author */}
                <label>Edit Book Author: </label>
                <input type="text"
                    className="form-control"
                    value={author}/* initial value */
                    onChange={(e) => { setAuthor(e.target.value) }} />{/* when event changes run setAuthor */}
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