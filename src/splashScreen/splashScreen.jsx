import { Link } from 'react-router-dom'
import AELogo, { FCLogo } from '../logo/logo'
import './splashScreen.css'

export default function SplashScreen() {
    return (
        <div className='splashContainer'>
            <div className='FClogo'>
                <FCLogo width='125' />
            </div>
            <div className='AElogo'>
                <AELogo width='125' />
            </div>
            <Link className='startButton' to="/menu">Start</Link>
        </div>
    )
}