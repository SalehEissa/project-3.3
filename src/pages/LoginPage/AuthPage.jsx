import SignUpForm from '../../SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

function AuthPage(props) {
    return (
        <main>
            <h1>Saleh's App</h1>
            <SignUpForm setUser={props.setUser} />
            <LoginForm setUser={props.setUser} />
        </main>
    )
}

export default AuthPage