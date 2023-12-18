import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditQuote() {
    let {id} = useParams();

    const [title, setQuoteTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {

            axios.get('http://localhost:4000/quoteapi/quote/'+id)
                .then((response) => {
                    setQuoteTitle(response.data.title);
                    setQuote(response.data.quote);
                    setAuthor(response.data.author);
                })
                .catch(
                    (error) => {
                        console.log(error);
                    }
                );
        }, []
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const quotes = {
            "title": title,
            "author": author,
            "quote": quote
        }

        
        axios.put('http://localhost:4000/quoteapi/quote/'+id, quotes)
            .then((res) => {
                navigate('/savedquotes');
            })
            .catch(
                (error) => {
                    console.log(error)
                });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Quote Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setQuoteTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Quote Author: </label>
                    <input disabled type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Quote: </label>
                    <input disabled type="text"
                        className="form-control"
                        value={quote}
                        onChange={(e) => { setQuote(e.target.value) }}
                    />
                </div>

                <div>
                    <br/>
                    <input type="submit"
                        value="Edit Quote">
                    </input>
                </div>
            </form>

        </div>
    );
}