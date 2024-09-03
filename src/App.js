import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import NewQuote from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";
// import Quote from "./pages/Quote";
import Quotes from "./pages/Quotes";

const NewQuote = lazy(() => import('./pages/NewQuote'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Quote = lazy(() => import('./pages/Quote'))


function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner/>
        </div>
      }>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
        <Route path='/quotes' exact>
          <Quotes/>
        </Route>
        <Route path='/quotes/:quoteId'>
          <Quote/>
        </Route>
        <Route path='/new-quote'>
          <NewQuote/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
