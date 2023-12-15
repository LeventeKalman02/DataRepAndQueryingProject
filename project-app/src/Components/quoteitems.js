import Card from 'react-bootstrap/Card';

function QuoteItem(items) {
    return(
        <div>
            <Card>
                {/* add and display the title, image, and author */}
                <Card.Header>{items.myQuote.quoteTitle}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={items.myQuote.image}></img>
                        <footer>
                            {items.myQuote.quoteAuthor}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>

    );
}

export default QuoteItem;