import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllAdmins = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/admins');
            const data = await res.json();
            return data;
        }
    });
    const handleDetetingUser = user => {
        console.log(user);
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'User Removed',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    return (
        <div>
            <div className="container mx-auto mt-4">
                <h1 style={{ color: '#D4A977', fontWeight: '300', letterSpacing: '2px' }} className="mb-3">All Admin</h1>
                <div className="table-responsive">
                    <table class="table table-striped border rounded">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"></th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">BackID</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th scope="row">{i + 1}</th>
                                    <th>{user.name[0]}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user._id}</td>
                                    <td><button onClick={() => handleDetetingUser(user)} style={{ backgroundColor: 'red' }} type="button" class="btn btn-sm text-white py-0">Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllAdmins;