import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initData from "data/initData.json"
import {
  setIsPending,
  setIsError,
  setIsDataChanged,
  setLastUpdated,
  setErrorInfo
} from 'app/slice/rootData'
import {
  textToJson,
  getFromStorage,
  setToStorage,
  compareObject,
} from 'components/utils/utils';

// Time to live
// const ttl = 86400000 // 24 hours
const ttl = 10000

const useFetch = (url) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // Get the user current time
    const time = new Date()
    const formattedTime = time.toLocaleDateString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    const now = time.getTime()
    const abortCont = new AbortController();

    // Check previous data if existed
    const storage = getFromStorage("data") ?? initData

    if (now > storage.expiry) {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) throw Error('Error fetching data')
          return res.text();
        })
        .then(text => {
          const data = textToJson(text.substr(47).slice(0, -2))
          setToStorage("data", { data: data, expiry: now + ttl, time: formattedTime })
          dispatch(setIsDataChanged(!compareObject(storage.data, data)))
          dispatch(setLastUpdated(formattedTime))
          dispatch(setIsPending(false))
          console.log("Data was fetched")
        })
        .catch(err => {
          // auto catches network / connection error
          setToStorage("data", storage)
          dispatch(setIsError(true))
          dispatch(setErrorInfo(err.msg))
          dispatch(setIsDataChanged(false))
          dispatch(setIsPending(false))
        })
    } else {
      console.log("Data was not fetched")
      setToStorage("data", storage)
      dispatch(setIsPending(false))
      dispatch(setIsError(false))
      dispatch(setIsDataChanged(false))
      dispatch(setLastUpdated(formattedTime))
    }
    // abort the fetch
    return () => abortCont.abort();
  }, [url, dispatch])
}

export default useFetch;