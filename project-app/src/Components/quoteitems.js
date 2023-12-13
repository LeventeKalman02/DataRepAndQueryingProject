import Card from 'react-bootstrap/Card';

function quoteItem(items) {
    return(
        <div>
            <Card>
                {/* add and display the title, image, and author */}
                <Card.Header>{items.myQuotes.quoteTitle}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={items.myQuotes.image}></img>
                        <footer>
                            {items.myQuotes.quoteAuthor}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>

    );
}

export default quoteItem;