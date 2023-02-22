import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllAdmins = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/admins');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <div className="container mx-auto mt-4">
                <h1 style={{ color: '#D4A977', fontWeight: '300', letterSpacing: '2px' }} className="mb-3">All Admin</h1>
                <div className="table-responsive">
                    <table class="table table-striped border rounded">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
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
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user._id}</td>
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

export default AllAdmins;