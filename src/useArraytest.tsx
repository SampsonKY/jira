import { useArray } from 'utils'

export const UseArrayTest = () =>{
    const persons: {name: string, age: number}[] = [
        { name: 'jack', age: 18},
        { name: 'ma', age: 19}
    ]

    const { value, clear, removeIndex, add } = useArray(persons);
    return(
        <>
            <button onClick={()=>add({name:'john', age: 19})} >add john</button>
            <button onClick={()=>removeIndex(0)}>remove 0</button>
            <button onClick={()=>clear()}>clear</button>
            {
                value.map((person, index)=>(
                    <div key={index}>
                        <span>{index}</span>
                        <span>{person.name}</span>
                        <span>{person.age}</span>
                    </div>
                ))
            }
        </>
    )
}