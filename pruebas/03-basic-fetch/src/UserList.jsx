import { useState, useEffect } from "react"

const API_USERS = 'https://jsonplaceholder.typicode.com/users'

export const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null) // Estado para manejar errores

    useEffect(() => {
        let isMounted = true // Flag para evitar actualizaciones si el componente se desmonta

        const fetchUsers = async () => {
            try {
                const response = await fetch(API_USERS)
                // Error de red o respuesta no exitosa del servidor
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.json()
                // Validación de datos
                if (!Array.isArray(data)) {
                    throw new Error('Data is not in the expected format')
                }
                if (isMounted) {
                    setTimeout(() => {
                        setUsers(data)
                        setLoading(false)
                    }, 5000)
                }
            } catch (e) {
                if (isMounted) {
                    setError(e.message)
                    setLoading(false)
                }
            }
        }

        fetchUsers()

        // Limpieza para evitar fugas de memoria
        return () => {
            isMounted = false
        }
    }, [])

    // Manejo de errores durante el renderizado
    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        // Use <main> as the primary content of your page
        <main >
            <h1 >User List</h1>
            {error ? (
                // Use <section> for a distinct section of the page
                <section aria-label="Error message" role="alert">
                    <p>Error: {error}</p>
                </section>
            ) : loading ? (
                // Use <div> with appropriate ARIA attributes for loading state
                <div role="status" aria-live="polite">
                    <p>Loading users...</p>
                    {/* Visually hidden text for screen readers */}
                    <span>Please wait while we load the user list.</span>
                </div>
            ) : (
                // Use <section> to group the list of users
                <section aria-label="User list">
                    {/* Use <ul> for an unordered list of users */}
                    <ul >
                        {users.map((user) => (
                            // Use <li> for each list item (user)
                            <li key={user.id}>
                                {/* Use <article> to represent a self-contained user card */}
                                <article>
                                    {/* Use <h2> for the user's name as it's the main heading for this card */}
                                    <h2 >{user.name}</h2>
                                    {/* Use <p> for the user's email */}
                                    <p>
                                        {/* Use appropriate aria-label for better screen reader experience */}
                                        <span>Email: </span>
                                        {user.email}
                                    </p>
                                </article>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </main>
    )
}