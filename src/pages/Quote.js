import { Fragment, useEffect } from 'react';
import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Quote = () => {
    const param = useParams();
    const match = useRouteMatch();

    const {quoteId} = param;

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if(status === 'pending'){
        return(
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        );
    }

    if(error){
        return(
            <p className='centered focused'>{error}</p>
        );
    }

    if(!loadedQuote.text){
        return (
            <p className='centered'>NO quote found!</p>
        );
    }

    return(
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comment`}>Load Comment</Link>
                </div>
            </Route>
            
            <Route path={`${match.path}/comment`}>
                <Comments/>
            </Route>
        </Fragment>
    );
}

export default Quote;