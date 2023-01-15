import './App.css';
import {
    BrowserRouter as Router,  //alias
    Route, Routes, NavLink
} from "react-router-dom";
import About from "./components/About";
import Users from "./components/Users";
import Home from "./components/Home";
import React, {useState} from "react";
import UserInfo from "./components/UserInfo";
import Error from "./components/Error";

function App() {

    const [users, setUsers] = useState([]);
    const activeStyle = {
        textDecoration: 'underline',
        backgroundColor: 'black',
        color: 'pink'
    }

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/" style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            }>Home</NavLink> {/*Bunun yerine <a href={} kullanılırsa sayfayı komple render eder />*/}
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                style={({isActive}) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            }>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>  { /* react-router-dom 6.xx ile switch kullanılmadığı için exact'e gerek yok */}
                    <Route path="/" element={Home()}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/users" element={<Users users={users} setUsers={setUsers} activeStyle={activeStyle} />}>
                        <Route path={`:id`} element={<UserInfo users={users} activeStyle={activeStyle}/>}/>
                    </Route>
                    <Route path={"*"} element={<Error/>}/>
                </Routes>
            </div>
        </Router>
    );
}


export default App;
