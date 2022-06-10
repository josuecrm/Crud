import CardUser from "./CardUser";

const UsersList = ({users, selectUser, deleteUser }) => {

    
    return (
        <div className="main-conatiner-users">
            <div className="container-users">
                <div className="user-list">
                    { users.map(user => (
                        <CardUser key={user.id} user={user} selectUser={selectUser} deleteUser={deleteUser} /> 
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UsersList;