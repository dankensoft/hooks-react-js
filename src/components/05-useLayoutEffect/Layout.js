import React, {useLayoutEffect, useRef, useState} from 'react';
import './layout.css';
import {useFetch} from '../../hooks/useFetch';
import {useCounterWithoutFactor} from '../../hooks/useCounterWithoutFactor';

export const Layout = () => {

  const {counter, increment} = useCounterWithoutFactor(1);

  const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  // console.log(loading);
  const {quote} = !!data && data[0];
  // console.log(author,quote);

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect( () => {
    // console.log(pTag.current.getBoundingClientRect());
    setBoxSize(pTag.current.getBoundingClientRect());
  },[quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p
          className="mb-0"
          ref={pTag}
        >{ quote }</p>
      </blockquote>

      <pre>
        {
          JSON.stringify(boxSize, null, 3)
        }
      </pre>

      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  )
}
