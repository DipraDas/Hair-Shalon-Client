import React from 'react';
import './Blog.css';
import { CiChat1 } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    return (
        <div>
            <div className="blogTag">{blog.tag}</div>
            <div className="blogTitle">{blog.blogTitle}</div>
            <div className="blogTimeComment">{blog.today} / by KOSATeam / <span> <CiChat1></CiChat1> 0</span> </div>
            <div className="blogDescription">{blog.description.slice(0,300) + ' . .. ...'}</div>
            <Link to={`/blogs/${blog._id}`}><button className='blogButton'>Read article</button></Link>
        </div>
    );
};

export default Blog;