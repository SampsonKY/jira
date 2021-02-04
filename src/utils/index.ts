import { useEffect, useState } from "react"
import { idText } from "typescript"

//如果不传入参数，就把参数字段删除
export const isFalsy = (value: unknown) => value === 0 ? false : !value

export const cleanObject = (object: object)=>{
    const result = {...object}
    Object.keys(result).forEach(key =>{
        // @ts-ignore
        const value = result[key]
        if(isFalsy(value)){
            // @ts-ignore
            delete result[key]
        }
    })
    return result
}

/**
 * 自定义Hooks
 */

// 1.将useEffect只加载一次的逻辑封装
export const useMount = (callback:()=>void) =>{
    useEffect(()=>{
        callback()
    }, [])
}

// 2.对输入框进行debounce处理
export const useDebounce = <V>(value: V, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const timeout = setTimeout(()=> setDebouncedValue(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay])

    return debouncedValue
}

// 3.作业：实现一个useArray
export const useArray = <T>(initialArray:T[]) => {
    const [value, setValue] = useState(initialArray);
    return {
        value,
        setValue,
        add: (item: T) => setValue([...value, item]),
        clear: () => setValue([]),
        removeIndex: (index: number) => {
            const copy = [...value];
            copy.splice(index,1);
            setValue(copy);
        }
    }
}