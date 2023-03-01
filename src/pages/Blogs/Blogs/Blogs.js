import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className='container mx-auto py-5'>
            <div className="row">
                <div className="col-9">
                    {
                        blogs?.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                    }
                </div>
                <div className="col-3">

                </div>
            </div>
        </div>
    );
};

export default Blogs;