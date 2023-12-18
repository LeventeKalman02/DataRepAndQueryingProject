import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function QuoteItem(items) {
    return(
        <div>
            <br></br>
            <Card>
                {/* add and display the title, quote, and author */}
                <Card.Header><h2>{items.myQuote.title}</h2></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>{items.myQuote.quote}</p>
                        <p>- {items.myQuote.author}</p>
                        <br></br>
                    </blockquote>
                    <Link to={'/edit/'+items.myQuote._id} className='btn btn-primary' style={{marginRight: 20 + 'px'}}>Edit Quote</Link>
                    <Button style={{marginLeft: 20 + 'px'}} variant='danger' onClick={
                        (e) => {
                            e.preventDefault();

                            axios.delete('http://localhost:4000/quoteapi/quotes/' + items.myQuote._id)
                                .then((res) => {
                                    //reload the page after deleting the quote
                                    let reload = items.Reload();
                                })
                                .catch();
                        }
                    }>Delete Quote</Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default QuoteItem;