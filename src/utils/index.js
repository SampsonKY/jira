import { useEffect, useState } from "react"

//如果不传入参数，就把参数字段删除
export const isFalsy = (value) => value === 0 ? false : !value

export const cleanObject = (object)=>{
    const result = {...object}
    Object.keys(result).forEach(key =>{
        const value = result[key]
        if(isFalsy(value)){
            delete result[key]
        }
    })
    return result
}

/**
 * 自定义Hooks
 */

// 1.将useEffect只加载一次的逻辑封装
export const useMount = (callback) =>{
    useEffect(()=>{
        callback()
    }, [])
}

// 2.对输入框进行debounce处理
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const timeout = setTimeout(()=> setDebouncedValue(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay])

    return debouncedValue
}

