import { useState } from "react"


const ListRender = () => {

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5)
        setUsers((prevUsers) =>  prevUsers.filter((user) => randomNumber !== user.id)
        )
    }

    const [list] = useState(['Wender', 'Ronaldo', 'Rafael'])
    const [users,setUsers] = useState([
        {id: 1, name: 'Willin', age: 30},
        {id: 2, name: 'Jose', age: 50},
        {id: 3, name: 'Marcos', age: 18},
        {id: 4, name: 'Mauricio', age: 27}
    ])

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>
                ))}
            </ul>
            {/* Previous state */}
            <button onClick={deleteRandom}>
                Delete random user
            </button>
        </div>

    )
}

export default ListRender