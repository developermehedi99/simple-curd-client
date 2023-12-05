import { useLoaderData } from "react-router-dom";

const Update = () => {
    const uselodedUser = useLoaderData();
    const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updateUser = { name, email };

        fetch(`http://localhost:5000/users/${uselodedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    alert('user update is successful')
                }
            })
    }

    return (
        <div>
            <h1>update information of {uselodedUser.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={uselodedUser.name} id="" /> <br />
                <input type="email" name="email" defaultValue={uselodedUser.email} id="" /> <br />
                <input type="submit" value="update user" />
            </form>
        </div>
    );
};

export default Update;