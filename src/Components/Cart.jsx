import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { MdOutlineCancel } from 'react-icons/md'
import { cartData } from '../data/dummy'

const Cart = () => {
  const { closeClick } = useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className='font-semibold text-lg'>Cart</p>
          <button
            type='button'
            onClick={closeClick}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50 %' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="mt-4 p-4">
          {cartData.map((item) => {
            return (
              <div className='border-b-2 border-color py-4 flex justify-around space-x-8'>
                <div className="rounded-lg w-8 h-auto">{item.image}</div>
                <div>
                  <p className='font-light text-sm'>{ }</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart