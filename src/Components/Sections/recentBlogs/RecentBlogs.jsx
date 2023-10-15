import React from 'react'
import { blogData } from '../../../data'

const RecentBlogs = () => {
  return (
    <div className='recentBlogs'>
      <div className="container">
        <div className="row">
            <div className="col-md-7">
                <span className='subtitle'>FROM OUR BLOG</span>
                <h2>Recent News & Updates</h2>

                {blogData.map((item) => (
                    <div className='recentBlog' key={item.id}>
                        <div className="row">
                            <div className="col-md-6 featuredImage" style={{
                                backgroundImage: item.featuredImage,
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no repeat',
                                backgroundSize: 'cover',
                            }}></div>
                            <div className="col-md-6 p-3">
                                <div className='metaData'>
                                    <img src={item.authorProfileImage} alt="" />
                                    <span className='authorName'>{item.author}</span>
                                    <span className='dot'></span>
                                    <span className='blogDate'>{new Date().getDate() < 10 && '0'+ new Date().getDate()}/{new Date().getMonth() < 10 && '0' + new Date().getMonth()}/{new Date().getFullYear()}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-md-5"></div>
        </div>
      </div>
    </div>
  )
}

export default RecentBlogs
