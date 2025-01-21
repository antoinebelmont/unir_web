import {createContext, useContext, useStatem, useEffect, useState} from "react";

const AuthContext = createContext(undefined)

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkAuth().then(response => console.log('checked'));
    }, []);

    const checkAuth = async () => {
        try{
            const response = await fetch('', {
                credentials: 'include'
            })
            const data = await response.json()
            setUser(data)
        }catch (error) {
            console.error('Failed to check auth status:', error)
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }

    const signIn = async (user, password) => {
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({user, password})
        })

        if(!response.ok){
            const error = await response.json()
            throw new Error(error.error || 'Failed to sign in')
        }
        const data = await response.json()
        setUser(data)
    }

    const signOut = async () => {
        await fetch('', {
            method: 'POST',
            credentials: 'include',
        })
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, signIn, signOut, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if(context === undefined){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}