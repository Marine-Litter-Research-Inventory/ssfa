import { useState, useEffect } from 'react';
import {
  textToJson,
  jsonToText,
  getFromStorage,
  setToStorage,
  compareObject,
  setColumnValue,
} from 'components/utils/utils';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [isDataChanged, setIsDataChanged] = useState(false);

  // const ttl = 86400000
  const ttl = 300000

  useEffect(() => {
    const time = new Date()
    const now = time.getTime()
    const abortCont = new AbortController();

    const storage = textToJson(getFromStorage("data")) || {}
    if (compareObject(storage, {}) || now > storage.expiry) {
      setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
          .then(res => {
            // error coming back from server
            if (!res.ok) throw Error('Error fetching data')
            return res.text();
          })
          .then(text => {
            const data = textToJson(text.substr(47).slice(0, -2))
            setIsPending(false);
            setData(data);
            setError(null);

            //Check whether data is the same as old data
            if (compareObject(storage.data, data))
              setIsDataChanged(true);
            else
              setIsDataChanged(false);

            setToStorage("data", jsonToText({ data: data, expiry: now + ttl }))
            setColumnValue()
            console.log("Data was fetched")
          })
          .catch(err => {
            if (err.name === 'AbortError')
              console.log('fetch aborted')
            else {
              // auto catches network / connection error
              setIsPending(false);
              setError(err.message);
            }
          })
      })
    } else {
      setIsDataChanged(false);
      setError(null);
      setIsPending(false);
      console.log("Data was not fetched")
    }
    setData(textToJson(getFromStorage('data')))
    setColumnValue()
    // abort the fetch
    return () => abortCont.abort();
  }, [url])
  console.log("The current value of data is: ", data)
  return { data, isPending, error, isDataChanged };
}

export default useFetch;