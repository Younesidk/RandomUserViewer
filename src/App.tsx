import {useEffect, useState} from "react";
import DisplayUsers from "./DisplayUsers.tsx";

export interface User
{
    id: number;
    name: string;
    email: string;
}



function App()
{
    const [users,setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchUsers()
        {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users`
                );


                console.log(response.status);
                console.log(response.ok);

                if(!response.ok)
                    throw new Error(`Failed to fetch users`);

                const data = await response.json() as User[];

                setUsers(data);
            }
            catch (error)
            {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchUsers();

    }, []);

    if(loading)
        return <h1>Loading Users...</h1>
    
    return <DisplayUsers users={users}/>
}

export default App;