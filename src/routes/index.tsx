
import { createFileRoute } from '@tanstack/react-router'
import { _useStore, useSelector } from '@tanstack/react-store'

import { createStore } from '@tanstack/store'

export const Route = createFileRoute('/')({
  component: App,
})

const store = createStore({a:1},({setState})=>({
  setNumber:(a)=>setState(pre=>({a:pre.a+1}))
}))
// _useStore can't update 
const UseStoreDemo = () =>{
      const [data,{setNumber}] = _useStore(store,(pre)=>pre.a)
      return <button className='border  w-50 mb-20 cursor-pointer' onClick={()=>setNumber(1)}>useStore hook {data}</button>
}

const UseSelectorDemo = () =>{
      const count = useSelector(store,(pre)=>pre.a)
     return <button className='border  w-50 mb-20 cursor-pointer' onClick={()=>store.actions.setNumber(1)}>useSelector hook {count}</button>
}
// this components has some issue too
const UseSelectorAndStoreDemo = () =>{
    const [data,{setNumber}] = _useStore(store,(pre)=>pre.a)
  const count = useSelector(store,(pre)=>pre.a)
     return (
          <>
            <button className='border  w-50 mb-20 cursor-pointer' onClick={()=>setNumber(1)}>useStore hook {data}</button>
            <button className='border  w-50 mb-20 cursor-pointer' onClick={()=>store.actions.setNumber(1)}>useSelector hook {count}</button>
          </>
     )
}

function App() {
 
  return (
    <div className='flex flex-col'>
      <UseStoreDemo />
      <UseSelectorDemo />
      {/* <UseSelectorAndStoreDemo/> */}
    </div>
  )
}
