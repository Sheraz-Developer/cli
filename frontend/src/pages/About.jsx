import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Seraphic Scent is a luxury fragrance brand that creates captivating perfumes, blending rare ingredients for a truly divine olfactory experience. Each scent is designed to evoke elegance, serenity, and a timeless sense of beauty, making every wearer feel extraordinary.</p>
        <p>Seraphic Scent is a transformative fragrance brand that crafts ethereal perfumes, designed to capture the essence of beauty, grace, and celestial elegance. Each scent is a masterpiece, blending rare ingredients to evoke profound emotions and elevate the spirit, offering a truly divine experience with every wear.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At Seraphic Scent, our mission is to provide high-quality, luxury fragrances that elevate the senses and create lasting impressions. We are dedicated to using the finest ingredients and expert craftsmanship to deliver perfumes that embody elegance, purity, and sophistication.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality Assurance at Seraphic Scent guarantees that each fragrance is crafted with the finest ingredients, delivering a luxurious and lasting experience. Every perfume undergoes meticulous testing to ensure it meets the brand's high standards of purity, elegance, and consistency.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Seraphic Scent offers the convenience of effortless luxury, with fragrances that can be easily incorporated into daily life. Their carefully curated collections make it simple to indulge in exceptional scents, anytime and anywhere.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Seraphic Scent is committed to providing exceptional customer service, ensuring every customer feels valued and heard. From personalized fragrance recommendations to prompt assistance, they go above and beyond to create a seamless and delightful shopping experience.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
