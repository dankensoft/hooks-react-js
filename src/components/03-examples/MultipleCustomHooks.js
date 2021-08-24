import React from 'react';
import '../02-useEffect/effects.css';
import {useFetch} from '../../hooks/useFetch';
import {useCounterWithoutFactor} from '../../hooks/useCounterWithoutFactor';

export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounterWithoutFactor(1);

  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  // console.log(loading);
  const {author, quote} = !!data && data[0];
  // console.log(author,quote);
  return (
    <div>
      <h1>Breaking Bad - Quotes</h1>
      <hr />
      {
        loading
        ?
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
        :
          (
            <blockquote className="blockquote text-right">
              <p>{ quote }</p>
              <footer className="blockquote-footer"> { author } </footer>
            </blockquote>
          )
      }
      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  )
}
