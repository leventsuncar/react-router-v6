import React, {useEffect, useState} from 'react';
import axios from "axios";
import {NavLink, Outlet, useLocation} from "react-router-dom";

function Users({users, setUsers, activeStyle}) {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data)
                setLoading(false)
            })
        // eslint-disable-next-line
    }, []);
    const pathname = useLocation().pathname
    console.log( pathname )

    return (
        <div>
            {loading && <div> Loading </div>}
            {!loading &&
                <ul>
                    {
                        users.map((user, i) => {
                            return <li key={i}><NavLink to={user.id.toString()}
                                                        style={({isActive}) =>
                                                            isActive ? activeStyle : undefined
                                                        }
                            > {user.name}
                            </NavLink></li>
                        })
                    }
                </ul>}
            <Outlet/>
        </div>
    );
}

export default Users;
