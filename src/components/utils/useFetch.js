import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setData,
  setPosition,
  setIsPending,
  setError,
  setIsDataChanged,
  setLastUpdated,
} from 'app/slice/rootData'
import {
  textToJson,
  jsonToText,
  getFromStorage,
  setToStorage,
  compareObject,
  setColumnValue,
} from 'components/utils/utils';

// Time to live
// const ttl = 86400000 // 24 hours
const ttl = 300000

const useFetch = (url) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // Get the user current time
    const time = new Date()
    const now = time.getTime()
    const abortCont = new AbortController();

    // Check previous data if existed
    const storage = textToJson(getFromStorage("data")) ?? { expiry: -1, data: null }

    if (now > storage.expiry) {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) throw Error('Error fetching data')
          return res.text();
        })
        .then(text => {
          const data = textToJson(text.substr(47).slice(0, -2))
          dispatch(setIsDataChanged(!compareObject(storage.data, data)))
          setToStorage("data", jsonToText({ data: data, expiry: now + ttl, time: time }))

          // Set position of all the data
          setColumnValue()
          dispatch(setIsPending(false))
          dispatch(setData(textToJson(getFromStorage("data"))))
          dispatch(setPosition(textToJson(getFromStorage("position"))))
          dispatch(setLastUpdated(time))
          console.log("Data was fetched")
        })
        .catch(err => {
          // auto catches network / connection error
          dispatch(setIsPending(false))
          dispatch(setError(err.message))
        })
    } else {
      console.log("Data was not fetched")
      dispatch(setIsPending(false))
      dispatch(setData(textToJson(getFromStorage("data"))))
      dispatch(setPosition(textToJson(getFromStorage("position"))))
      dispatch(setLastUpdated(storage.time))
    }
    // abort the fetch
    return () => abortCont.abort();
  }, [url, dispatch])
}

export default useFetch;