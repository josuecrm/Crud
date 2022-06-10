import { FaBirthdayCake } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillEdit, AiFillDelete } from 'react-icons/Ai';


const CardUser = ({ user, selectUser, deleteUser }) => {
   
    return (
        <div className='card'>
            <div className='bandage'></div>
            <div className="wrapper-data">
                <div className='info'>
                    <h4> {`${user.first_name}  ${user.last_name}`} </h4>
                    <p> <MdEmail className='icon'/> {user.email} </p>
                    <p> <FaBirthdayCake className='icon' /> {user.birthday} </p>
                </div>
                <div className='container-buttons'>
                    <div className="buttons">
                        <button onClick={() => selectUser(user)} className='button edit'><AiFillEdit /> Edit</button>
                        <button onClick={() => deleteUser(user.id)} className='button delete'><AiFillDelete /> Delete </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardUser;