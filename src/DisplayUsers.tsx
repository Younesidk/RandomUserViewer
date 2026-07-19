import type {User} from './App.tsx';

interface DisplayUsersProps {
    users: User[];
}

function DisplayUsers(props: DisplayUsersProps)
{
    return (
        <>
            {
                props.users.map(user => (

                    <div key={user.id}>
                        <h1>Name: {user.name}</h1>
                        <h2>Email: {user.email}</h2>
                    </div>

                ))
            }
        </>
    );
}

export default DisplayUsers;