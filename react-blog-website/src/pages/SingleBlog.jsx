import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUserAlt,FaClock } from "react-icons/fa";
import SideBar from '../components/SideBar';

const SingleBlog = () => {
    const data=useLoaderData();
    // console.log(data);

    const{author,category,content,image,published_date,title,reading_time}=data[0];

  return (
    <div>
        <div className='py-20 bg-black text-white text-center px-4'>
        <h2 className='text-5xl lg:text-7xl font-bold leading-snug mb-5'>Single Blog</h2>
      </div>


      {/* each blog details */}

      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
            <div>
               <img src={image} alt="" className='w-full mx-auto rounded '/>
            </div>
            <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-600'>  <FaUserAlt className='inline-flex items-center mr-2'/> {author} | {published_date}</p>
            <p className='mb-3 text-gray-600'>  <FaClock className='inline-flex items-center mr-2'/> {reading_time}</p>
            <p className='text-base text-gray-500 mb-6'>{content}</p>
            <div className='text-base text-gray-500'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quia animi blanditiis, unde totam nulla rem tempore earum ad fugit suscipit autem! Praesentium consectetur pariatur in eligendi unde ex facilis.
                Cupiditate quo vero ratione quidem? Dolor, velit. Non possimus architecto, voluptates tempore unde commodi eligendi vero ut ullam illo accusamus doloribus ipsa assumenda odit saepe rerum iste est qui aperiam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quasi aliquid. Non adipisci, consequuntur reiciendis vero, quaerat unde est saepe, magnam molestias esse consequatur. Error quia consequatur sunt fugit quam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde reprehenderit voluptates inventore consectetur impedit fuga aliquam quas expedita cum nesciunt deserunt, laborum eaque nihil, deleniti quisquam veniam. Vero, suscipit!
                Molestias fugit labore dicta. Vel rerum, ipsa et libero, tenetur delectus minus facilis commodi odit eos dolor quis quia tempora esse voluptatum rem alias consequatur iste voluptas soluta id. Beatae.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit assumenda exercitationem fuga possimus consectetur neque animi obcaecati, aliquam, molestias deleniti ipsa ipsum sint sequi veritatis enim tempora? Tempora, dolor perspiciatis.
                Rerum minus veritatis nihil sequi harum delectus assumenda nulla eum quidem beatae corrupti, fugit blanditiis cupiditate voluptate necessitatibus vero velit corporis quas distinctio id inventore aut reprehenderit. Alias, delectus nihil?
                Tempore illum sapiente ea, rerum itaque asperiores quam nihil beatae fuga quo ratione et soluta unde, consequuntur pariatur harum? Laborum odio at quaerat, corporis ipsa eveniet eum? Obcaecati, ipsam voluptatum?
                Ut repellendus illum facilis quasi vero accusantium impedit, recusandae laudantium quod. Commodi quae et quibusdam, veniam quaerat, repellat eum pariatur consectetur neque excepturi labore magni odio. Dolores aliquam consequatur eaque.
                Harum alias excepturi quasi nemo nulla consectetur beatae ex adipisci et aliquid similique sit minus, ad consequuntur reiciendis debitis possimus suscipit cupiditate, vitae ut! Ipsam corrupti hic placeat illo eveniet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde reprehenderit voluptates inventore consectetur impedit fuga aliquam quas expedita cum nesciunt deserunt, laborum eaque nihil, deleniti quisquam veniam. Vero, suscipit!
                Molestias fugit labore dicta. Vel rerum, ipsa et libero, tenetur delectus minus facilis commodi odit eos dolor quis quia tempora esse voluptatum rem alias consequatur iste voluptas soluta id. Beatae.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit assumenda exercitationem fuga possimus consectetur neque animi obcaecati, aliquam, molestias deleniti ipsa ipsum sint sequi veritatis enim tempora? Tempora, dolor perspiciatis.
                Rerum minus veritatis nihil sequi harum delectus assumenda nulla eum quidem beatae corrupti, fugit blanditiis cupiditate voluptate necessitatibus vero velit corporis quas distinctio id inventore aut reprehenderit. Alias, delectus nihil?
                Tempore illum sapiente ea, rerum itaque asperiores quam nihil beatae fuga quo ratione et soluta unde, consequuntur pariatur harum? Laborum odio at quaerat, corporis ipsa eveniet eum? Obcaecati, ipsam voluptatum?
                Ut repellendus illum facilis quasi vero accusantium impedit, recusandae laudantium quod. Commodi quae et quibusdam, veniam quaerat, repellat eum pariatur consectetur neque excepturi labore magni odio. Dolores aliquam consequatur eaque.
                Harum alias excepturi quasi nemo nulla consectetur beatae ex adipisci et aliquid similique sit minus, ad consequuntur reiciendis debitis possimus suscipit cupiditate, vitae ut! Ipsam corrupti hic placeat illo eveniet.</p>
            </div>
        </div>


        {/* sidebar */}
        <div className='lg:w-1/2'>
            <SideBar/>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog