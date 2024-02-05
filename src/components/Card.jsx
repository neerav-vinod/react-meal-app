import React from 'react'

const Card = ({data}) => {
  return (
    <>
        <div>
            <div className='w-[300px]  h-auto'>
                <div className='flex justify-center'>
                    <img src={data.strMealThumb} alt="" className='h-[250px] w-[auto] rounded-lg' />
                </div>

                <div>
                    <h1 className='text-center font-bold text-lg'>{data.strMeal}</h1>
                    <h1 className='text-center text-orange-500'>{data.strCategory}</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card