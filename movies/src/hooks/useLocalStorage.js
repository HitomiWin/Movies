import {useState, useEffect} from 'react'

const useLocalStorage = (key, defaultValue=null) => {

  const [value, setValue] = useState(()=>{ // It used callback because something returns

    const jsonValue = localStorage.getItem(key)
    return jsonValue
      ?JSON.parse(jsonValue)
      :defaultValue
  })

  useEffect(() => {
    if (typeof value === 'undefined') {
			return;
		}
    localStorage.setItem(key, JSON.stringify(value)) //set values..
  }, [key, value ])

  return[
    value,
    setValue
  ]
}

export default useLocalStorage