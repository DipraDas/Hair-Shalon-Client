import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CiChat1 } from "react-icons/ci";
import './BlogDetails.css';

const BlogDetails = () => {
    const formBlogs = useLoaderData();
    const blog = (formBlogs[0]);
    return (
        <div>
            <div className="backGroundBlogDetails">
                <div className="container mx-auto">
                    <div className='backGroundBlogDetailsTag text-center'>{blog.tag}</div>
                    <div className='backGroundBlogDetailsTitle text-center'>{blog.blogTitle}</div>
                    <div className="backGroundBlogDetailsTimeComment text-center">{blog.today} / by KOSATeam / <span> <CiChat1></CiChat1> 0</span> </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;