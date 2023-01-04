import {AuthProvider} from '../../components/auth/AuthProvider'
import Dashboard from '../../components/dashboard'
export default () =>{
    return (
        <AuthProvider>
            <Dashboard/>
        </AuthProvider>
    )
}