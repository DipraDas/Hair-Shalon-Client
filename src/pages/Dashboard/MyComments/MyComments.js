import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../../components/loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyComments = () => {
    const { user } = useContext(AuthContext);

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/mycomments?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setComments(data))
    }, [user?.email])

    const handleDetetingcomment = data => {

    }

    return (
        <div>
            <div className="container mx-auto mt-4">
                {comments?.length > 0 ?
                    <h1 h1 style={{ color: '#D4A977', fontWeight: '300', letterSpacing: '2px' }} className="mb-3">My Comment - {comments.length}</h1>
                    :
                    < h1 style={{ color: '#D4A977', fontWeight: '300', letterSpacing: '2px' }} className="mb-3">No Comment Yet</h1>
                }
                {
                    comments?.length > 0 &&
                    <div className="table-responsive">
                        <table className="table table-striped border rounded  table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Blog ID</th>
                                    <th scope="col">Posted On</th>
                                    <th scope="col">Comment</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    comments?.map((comment, i) => <tr key={comment._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{comment.blogId}</td>
                                        <td>{comment.postedMonth}, {comment.postedYear}</td>
                                        <td>{comment.comment.slice(0, 70)}</td>
                                        <td><button onClick={() => handleDetetingcomment(comment)} style={{ backgroundColor: 'red' }} type="button" className="btn btn-sm text-white py-0">Delete</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div >
    );
};

export default MyComments;