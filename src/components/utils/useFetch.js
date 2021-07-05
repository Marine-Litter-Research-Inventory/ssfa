import { useState, useEffect } from 'react';
import _ from "lodash";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [isDataChanged, setIsDataChanged] = useState(false);

  // const ttl = 86400000
  const ttl = 100000

  useEffect(() => {
    const time = new Date()
    const now = time.getTime()
    const abortCont = new AbortController();

    const storage = JSON.parse(localStorage.getItem("data")) || {}
    console.log("🚀 ~ file: useFetch.js ~ line 19 ~ useEffect ~ storage", storage)

    if (_.isEqual(storage, {}) || now > storage.expiry) {
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
            console.log("🚀 ~ file: useFetch.js ~ line 36 ~ setTimeout ~ !_.isEqual(storage.data, data)", !_.isEqual(storage.data, data))
            if (!_.isEqual(storage.data, data)) {
              console.log("is data changed", true)
              setIsDataChanged(true);
            } else {
              console.log("is data changed", false)
              setIsDataChanged(false);
            }
            localStorage.setItem("data", JSON.stringify({ data: data, expiry: now + ttl }))
            console.log("Data was fetched")
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
      console.log("Data was not fetched")
    }
    setData(JSON.parse(localStorage.getItem('data')))
    // abort the fetch
    return () => abortCont.abort();
  }, [url])
  console.log("🚀 ~ file: useFetch.js ~ line 68 ~ useFetch ~ data", data)
  return { data, isPending, error, isDataChanged };
}

export default useFetch;