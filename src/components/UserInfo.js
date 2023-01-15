// import React, {useEffect, useState} from 'react';
import { NavLink, useParams} from "react-router-dom";
import PropTypes from "prop-types";

// import axios from "axios";

function UserInfo({users, activeStyle}) {
    // const [user, setUser] = useState( {} );
    const {id} = useParams();
    // useEffect(() => {
    //    axios( `https://jsonplaceholder.typicode.com/users/${id}`)
    //         .then( (res) => setUser ( res.data ) )
    // }, []);

    const user = users.find((user) => {
        console.log(user)
        return user.id.toString() === id
    })


    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td></td>
                    <td> User</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        {user?.name}
                    </td>
                </tr>
                <tr>
                    <td>
                        Phone
                    </td>
                    <td>
                        {user?.phone}
                    </td>
                </tr>
                <tr>
                    <td>
                        Email
                    </td>
                    <td>
                        {user?.email}
                    </td>
                </tr>
                </tbody>
            </table>
            <NavLink to={`/users/${parseInt(id) + 1}`}
                     style={({isActive}) =>
                         isActive ? activeStyle : undefined
                     }
            > Sıradaki Kullanıcı {parseInt(id) + 1} </NavLink>
        </div>
    );
}

UserInfo.propTypes = {
    users: PropTypes.array
}

export default UserInfo;
