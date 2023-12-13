import quoteItem from './quoteitems';

function Quotes(items){

    return items.myQuote.map(
        (quote)=>{
            return <quoteItem myQuote = {quote} key= {quote._id}></quoteItem>
        }
    );
}

export default Quotes;