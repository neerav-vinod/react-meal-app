import React, { useState } from 'react'
import Layout from '../components/Layout'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import { categoryArray } from '../data/catagory'
import Lottie from 'react-lottie';
import animationData from '../animations/loading.json'



const Categories = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'   

    const {data,error} = useFetch(apiURL)

    const [filterdData, setFilterdData] = useState([])
    
    const [selectedCat , setSelectedCat] = useState('')

    console.log(error); 

    //Category Filter 
    const categoryFilter = (category) =>{
      setSelectedCat(category)  
      const  filetrdData =  data?.filter(data => data.strCategory.toLowerCase().includes(category.toLowerCase()))
      setFilterdData(filetrdData)
    }

  return (
    <Layout>

      {/* heading  */}
      <div>
            <h1 className='text-2xl font-bold mt-4 text-center' >Categories</h1>
      </div>
      

      {/* categoryList */}
      <div>
        <div className='mt-5 p-3 flex gap-3 flex-wrap justify-center' >
            {categoryArray.map(data => 
                <button onClick={()=>categoryFilter(data.name)} key={data.id} className={selectedCat === data.name ? 'p-2 border-orange-300 text-orange-300 border rounded-full ' : 'p-2 border-orange-500 text-orange-500 border rounded-full  hover:border-orange-300 hover:text-orange-300'} >{data.name}</button>
                )}
        </div>        
      </div> 

      

      {/* data display */}
      <div>
         <div className='flex flex-col justify-center'>  
         { filterdData.length === 0 &&
         <div>
         <Lottie options={defaultOptions}
              height={400}
              width={400}/> 
         <p className='text-center'>No Categories Seletced</p> 
         </div>
          } 
        <div className='flex justify-center' >    
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mb-10 mt-5' >
      {
        filterdData.length !== 0 &&
        filterdData?.map(data => (           
            <Card data={data} />
        ))
      } 
       </div>
       </div>
       </div>  
       </div>           
 

    </Layout>
  )
}

export default Categories