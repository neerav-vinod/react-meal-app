import React from 'react'
import Layout from '../components/Layout'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie';
import animationData from '../animations/loading.json'

const HomePage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
   

    const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'   
    const bgURL = 'https://www.yorku.ca/foodservices/wp-content/uploads/sites/50/2022/09/Copy-of-Diet.png'
    const {data,loading,error} = useFetch(apiURL)

    const nav = useNavigate()

    console.log(error)
  return (
    <Layout>

      {/* Hero Image   */}
      
      <div style={{backgroundImage:`url(${bgURL})`}} className=' object-cover object-center shadow-lg' >
        <div className='bg-black opacity-20 h-[500px] md:h-[600px]'></div>
      </div>

      {/* Our Special Meals */}
      <div>
      {!loading &&
        <div className='flex flex-col items-center mt-10'>
            <h1 className='text-3xl font-bold text-orange-500 ' >Our Special Dishes</h1>
        </div>
        }
      <div className='flex justify-center mt-8'>
      {loading && 
        <Lottie options={defaultOptions}
        height={400}
        width={400}/> 
      }  
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4'>
      {!loading && data?.slice(0,8)?.map(data =>< Card data={data} />) } 
        </div>
        </div>

        {!loading && <div className=' mt-10 mb-10 flex justify-center'>
            <button onClick={()=>nav('/all-dishes')} className='p-2 border font-semibold border-orange-500 text-orange-500 hover:border-orange-300 hover:text-orange-300 ' >See More</button> 
        </div>}
        </div>

        

    </Layout>
  )
}

export default HomePage