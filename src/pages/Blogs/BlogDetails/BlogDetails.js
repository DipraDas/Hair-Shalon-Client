import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const formBlogs = useLoaderData();
    const blog = (formBlogs[0]);

    return (
        <div>

        </div>
    );
};

export default BlogDetails;