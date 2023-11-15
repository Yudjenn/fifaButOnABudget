import './logo.css'

export default function AELogo(width) {
    document.documentElement.style.setProperty("--logoWidth", `${Number(Object.values(width))}px`)
    return (
        <div className="logoBG">
            <p>AE</p>
            <p>sports</p>
        </div>
    )
}

export function FCLogo(FCwidth) {
    document.documentElement.style.setProperty("--logoWidth", `${Number(Object.values(FCwidth))}px`)
    return (
        <div className='FCLogoContainer'>
            <div className="logoBG">
                <p>AE</p>
                <p>sports</p>
            </div>
            <p className='fc'>FC24</p>
        </div>
    )
}