import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const UserForm = ({getUsers, userSelected, deselect}) => {

const { register, handleSubmit, reset } = useForm();

const submit = data => {
    if( userSelected !== null ) {
        axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
            .then ( () => {
                getUsers()
                deselect()
            })
    } else {
        axios.post('https://users-crud1.herokuapp.com/users/', data)
            .then ( () => {
                getUsers()
                reset()
            })
    }
}

const cancelEdit = () => {
    deselect()
}

useEffect ( () => {
    if( userSelected !== null ) {
        reset(userSelected)
    } else {
        reset({
            first_name: "",
            last_name: "",
            birthday: "",
            email: "",
            password: ""
        })
    }
}, [ userSelected ])

    return (
        <div className="form-container">
            <div>
                <p className="title-form">ADD NEW USER </p>
            </div>
            <div className="button-delete">
                    <button className={`cancel ${userSelected !== null ? "active" : ""}`} onClick={cancelEdit}> X </button>
            </div>
            <form  className="form" onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" {...register("first_name")} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" {...register("last_name")} />
                </div>
                <div>
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" id="birthday" {...register("birthday")} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password")} />
                </div>

                <button className="submit"> Submit </button>
    

            </form>
        </div>
    );
};

export default UserForm;