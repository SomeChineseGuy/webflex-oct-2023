import axios from "axios"
import { useEffect, useState } from "react"

const useDataFetch = (url) => {
  const [imageData, setImageData ] = useState({
    image: "",
    counter: 0
  })

  useEffect(() => {
    axios.get(url).then((res) => {
      setImageData((prev) => {
        console.log(prev);
        const value = Object.keys(res.data)[0]

        return {
          ...prev,
          image: res.data[value]
        }
      })
    })
  }, [imageData.counter, url])

  const increment = () => {
    setImageData((prev) => {
      return {
        ...prev,
        counter: prev.counter + 1
      }
    })
  }

  const decrement = () => {
    setImageData((prev) => {
      return {
        ...prev,
        counter: prev.counter - 1
      }
    })
  }

  return {
    imageData,
    increment,
    decrement
  }
}

export default useDataFetch;