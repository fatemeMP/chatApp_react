import React , {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';


export const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

    const [loading ,setLoading] = useState( true);
    const [user , setUser] = useState(false);
    const history = useHistory ();       //baraye navigation , karbar roo mifreste be yek adrese dg

    useEffect( () => {
        auth.onAuthStateChanged( user => {
            setUser(user);
            setLoading(false);
            if(user) history.push("/chats"); //age etelaat user true bud befrestesh too safeye chat
        })
    },[user ,history])


    return (
        <div>

            <AuthContext.Provider value={user}>
                    { !loading && children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthContextProvider;