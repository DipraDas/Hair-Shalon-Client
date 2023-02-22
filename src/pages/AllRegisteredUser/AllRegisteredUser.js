import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import { FaCheckCircle } from 'react-icons/fa';

const AllRegisteredUser = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successful',
                        showConfirmButton: false,
                        timer: 2200
                    })
                    refetch();
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto mt-4">
                <h1 style={{ color: '#D4A977', fontWeight: '300', letterSpacing: '2px' }} className="mb-3">All Users</h1>
                <div className="table-responsive">
                    <table class="table table-striped border rounded">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Admin</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user?.role !== 'admin' ?
                                                <button onClick={() => handleMakeAdmin(user._id)} style={{ backgroundColor: '#0a18bc' }} className='btn btn-sm text-white py-0'>Make Admin</button> :
                                                <div style={{ color: '#0ca1b7' }} className="d-flex align-items-center">
                                                    <div><FaCheckCircle></FaCheckCircle> </div>
                                                    <div className='ms-2'>Admin</div>
                                                </div>
                                        }
                                    </td>
                                    <td><button style={{ backgroundColor: 'red' }} type="button" class="btn btn-sm text-white py-0">Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllRegisteredUser;