import React from 'react'

const Services = () => {
  return (
    <div>
      <div className='py-20 bg-black text-white text-center px-4' >
        <h2 className='text-5xl lg:text-7xl font-bold leading-snug mb-5'>Services</h2>
      </div>

      {/* content */}

      <div className='service-content my-10'>
        <h4 className='text-orange-500 text-3xl '>Our Services</h4>
        <h2 className='text-5xl bold font-bold'>What We Offer</h2>
        <p>At blog.bg, we specialize in crafting engaging and high-quality content tailored to your audience. Our team of experienced writers covers a diverse range of topics, ensuring your blog remains fresh and relevant. Whether you need articles, reviews, or creative pieces, we've got you covered.
          
          Maximize your online visibility with our expert SEO services. We utilize the latest techniques and tools to ensure your blog ranks higher in search engine results. From keyword research to on-page optimization, our strategies are designed to drive organic traffic and boost your blog's performance.
        </p>
      </div>

      {/* services section */}

      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 m-10'>
        {/* design */}
        <div className='service-card p-5 shadow-lg rounded cursor-pointer'>
          <img src=".\src\assets\creative-idea.png" alt="" />
          <h4 className='text-2xl font-bold'>Refreshing Design</h4>
          <p>Enhance the visual appeal of your blog with our professional graphic design services. Our designers create custom graphics, infographics, and multimedia content that resonate with your readers and make your blog stand out.</p>
        </div>
        {/* search optimization  */}
        <div className='service-card p-5 shadow-lg rounded cursor-pointer'>
          <img src=".\src\assets\open-book.png" alt="" />
          <h4 className='text-2xl font-bold'>Search Functionality</h4>
          <p>In the digital age, providing an efficient and effective search experience is crucial for retaining visitors and ensuring they find the content they are looking for quickly and easily. At Blog.bg, we offer advanced search functionality services to help you enhance your blog's user experience and keep your readers engaged.</p>
        </div>

        {/* Updates  */}
        <div className='service-card p-5 shadow-lg rounded cursor-pointer'>
          <img src=".\src\assets\updates.png" alt="" />
          <h4 className='text-2xl font-bold'>Regular Updates</h4>
          <p>Keep your blog running smoothly with our reliable technical support services. Blog.bg handles everything from website setup and maintenance to troubleshooting and updates, so you can focus on what you do best—creating amazing content.</p>
        </div>
        {/* desktop */}
        <div className='service-card p-5 shadow-lg rounded cursor-pointer'>
          <img src=".\src\assets\desktop.png" alt="" />
          <h4 className='text-2xl font-bold'>Speed Optimized</h4>
          <p>Boost your blog’s credibility and reach with our guest posting services. Blog.bg connects you with industry experts and influencers who provide valuable insights and attract a broader audience to your blog. Elevate your content with diverse voices and perspectives.</p>
        </div>
        {/* nodes */}
        <div className='service-card p-5 shadow-lg rounded cursor-pointer'>
          <img src=".\src\assets\nodes.png" alt="" />
          <h4 className='text-2xl font-bold'>Fully Customizable</h4>
          <p>Transform your social media into a powerhouse of engagement and growth. Our comprehensive social media management services at blog.bg include content creation, posting, and follower interaction across multiple platforms. Connect with your audience and build a vibrant online community.</p>
        </div>
        {/* drop box */}
        <div className='service-card p-5 shadow-lg rounded cursor-pointer'>
          <img src=".\src\assets\dropbox-icon.png" alt="" />
          <h4 className='text-2xl font-bold'>300+ Components</h4>
          <p>Unlock the power of search engines with our expert SEO services! At blog.bg, we employ cutting-edge techniques and tools to boost your blog's visibility. From meticulous keyword research to precise on-page optimization, we drive organic traffic and elevate your blog’s presence in search results.</p>
        </div>
        


      </div>


    </div>
  )
}

export default Services