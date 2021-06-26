import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [isDataChanged, setIsDataChanged] = useState(false);

  const ttl = 86400000

  useEffect(() => {
    const time = new Date()
    const now = time.getTime()
    const abortCont = new AbortController();

    const storage = JSON.parse(localStorage.getItem('data')) || false

    if (!storage || now > storage.expiry) {
      setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            }
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
            setIsDataChanged(true);
            localStorage.setItem("data", JSON.stringify({ data: data, expiry: now + ttl }))
            console.log("From fetching")
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              // auto catches network / connection error
              setIsPending(false);
              setError(err.message);
            }
          })
      }, []);
    } else {
      setIsDataChanged(false);
      setError(null);
      setIsPending(false);
      console.log("Did not fetch")
    }
    setData(JSON.parse(localStorage.getItem('data')))
    // abort the fetch
    return () => abortCont.abort();
  }, [url])
  // console.log(data)
  return { data, isPending, error, isDataChanged };
}

export default useFetch;