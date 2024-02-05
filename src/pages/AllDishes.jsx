import React, { useState } from 'react'
import Layout from '../components/Layout'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import Lottie from 'react-lottie';
import animationData from '../animations/loading.json'

const AllDishes = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const [input,setInput] = useState('')

    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'

    const {data,loading,error} = useFetch(apiUrl)

    console.log(error);


  return (
   <Layout>

    {/* Heading */}
    <div className='mt-10'>
        <h1 className='text-2xl font-bold text-center' >
            All Dishes
        </h1>
    </div>

    {/* search Box */}
    <div className='mt-5 flex justify-center'>
        <input type="text" placeholder='Search By Name ' className='p-3 rounded-md w-[18rem] border border-black' onChange={e=>setInput(e.target.value)} />
    </div>

    {/* displayData */}
    <div className='flex justify-center mt-8 mb-10'>
       {
        loading &&
        <Lottie options={defaultOptions}
              height={400}
              width={400}/> 
       } 
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4'>
      {!loading &&  data?.filter(data =>{
        return input.toLocaleLowerCase() === '' ?
        data :
        data?.strMeal.toLowerCase().includes(input.toLocaleLowerCase())
      }
      )
      .map(data => < Card data={data} />) 
      } 
        </div>
        </div>
   </Layout>
  )
}

export default AllDishes