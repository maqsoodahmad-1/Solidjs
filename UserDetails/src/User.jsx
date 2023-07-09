import { createSignal } from "solid-js"
import { nanoid } from "nanoid";

function User() {
    const [id, setId] = createSignal("")
    const [name, setName] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");

    //bunch of users
    const [users, setUsers] = createSignal([]);

    const [buttonName, setButtonName] = createSignal([]);
    setButtonName("Add User")

    //Function to Delete the user 
    const deleteUser = (id) => {
        const newUser = users().filter((user) => user.id !== id);
        setUsers(newUser);
    }

    // Function to update the user
    const editUser = (id) => {
        const user = users().find((user) => user.id === id);
        setId(user.id);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setButtonName("Update");
    }


    const submitUser = (id) => {
        if (id) {
            const user = {
                id: nanoid(8),
                name: name(),
                email: email(),
                password: password(),
            };
            setUsers(users().filter((user) => user.id !== id));
            setUsers([...users(), user])
        } else {
            const user = {
                id: nanoid(8),
                name: name(),
                email: email(),
                password: password(),
            };
            setUsers([...users(), user]);
            // Append the user to the previous users
        }
        setButtonName("Add User");
            setId("");
            setName("");
            setEmail("");
            setPassword("");
          

    };

    return (
        <>
            <div class="w-full max-w-xs  dark:bg-gray-800">
                <div class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                            value={name()}
                            onInput={(e) =>setName(e.target.value)}/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="yourname@email.com"
                            value={email()}
                            onInput={(e) =>setEmail(e.target.value)}/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
                            value={password()}
                            onInput={(e) =>setPassword(e.target.value)}/>
                        
                    </div>
                    <div class="flex items-center justify-end">
                        <button class="bg-blue-500  hover:bg-white text-black hover:border-2 rounded-lg hover:border-black font-bold py-2 px-4  focus:outline-none focus:shadow-outline " type="button"
                            onClick={() => buttonName() == 'Add User'?submitUser():submitUser(id())}>
                            {buttonName}
                        </button>
                    </div>
                </div>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>


            {/* Table */}
            <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" class="px-6 py-4">#</th>
                        <th scope="col" class="px-6 py-4">Name</th>
                        <th scope="col" class="px-6 py-4">Email</th>
                        <th scope="col" class="px-6 py-4">Password</th>
                        <th scope="col" class="px-6 py-4">Edit</th>
                        <th scope="col" class="px-6 py-4">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {

                        users().map((user) => (

                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">{user.id}</td>
                                <td class="whitespace-nowrap px-6 py-4">{user.name}</td>
                                <td class="whitespace-nowrap px-6 py-4">{user.email}</td>
                                <td class="whitespace-nowrap px-6 py-4">{user.password}</td>
                                <td class="whitespace-nowrap px-6 py-4"></td>
                                <td>
                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        onClick={() => editUser(user.id)}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))

                    }

                </tbody>
            </table>
        </>
    )
};

export default User;