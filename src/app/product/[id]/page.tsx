import { singleProduct } from '@/data';
import React from 'react';
import Image from 'next/image';
import Price from '@/components/Price';


const SingleProductPage = () => {
    return (
        <div className='p-4 lg:px-20 xl-px-40 h-screen flex flex-col justify-around
                        text-red-500 sm:flex-row sm:gap-8 sm:items-center'>
         {/*IMAGE CONTAINER */}  
         {singleProduct.img && (
            <div className='relative w-full h-1/2 md:h-[70%]'>
                <Image 
                    src={singleProduct.img} 
                    alt="" 
                    className="object-contain" 
                    fill 
                />
            </div>
         )}
         {/*TEXT CONTAINER */}
            <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
                <h1 className='text-2xl font-bold uppercase 2xl:text-2xl'>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
                <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
                <button></button>
            </div>
        </div>
    )
}
export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
  }
   
  



export default SingleProductPage 