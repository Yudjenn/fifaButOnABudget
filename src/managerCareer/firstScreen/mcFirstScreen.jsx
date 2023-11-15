import { useState } from "react"
import { bolton, manchesterUnited, wales } from "../../clubsDB/clubs"
import './mcFirstScreen.css'

export default function McFirstScreen() {
    let clubs = [manchesterUnited, bolton, wales]
    let [iandex, setIandex] = useState(0)
    let maxIndex = clubs.length
    let yellowStar = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{fill: '#fec700'}}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
    let whiteStar = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{fill: '#ffffff'}}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
    let rightArrow = <svg onClick={() => {
        if (iandex <= 0) {
            setIandex(maxIndex-1)
        } else {
            setIandex(iandex -= 1)
        }}} className="arrow rightArrow" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" style={{fill: '#fff'}}><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
    let leftArrow = <svg onClick={() => {
        if (iandex < maxIndex-1) {
            setIandex(iandex += 1)
        } else {
            setIandex(0)
        }}} className="arrow leftArrow" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" style={{fill: '#fff'}}><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
    return (
        <div className='mcFirstScreenContainer'>
            <div className='arrowsContainer'>
                {rightArrow}
                {leftArrow}
            </div>
            {clubs.map(function(object, i){
                return (
                    <div key={i} className='mcChooseClub'>
                        <div className='mcFirstScreenPicker mcFirstScreenClubName'><p>{clubs[iandex].name}</p></div>
                        <div className='mcFirstScreenPicker mcFirstScreenClubLogo'><p>logo func comin soon i swr</p></div>
                        <div className='mcFirstScreenPicker mcFirstScreenClubStars'>{clubs[iandex].stars.map(function(object, j){
                            return (
                                <div key={j} className="mcfirstscreenstarcounter">
                                    {clubs[iandex].stars[j] == 1 ? yellowStar : whiteStar}
                                </div>
                            )
                        })}</div>
                    </div>
                )
            })}
        </div>
    )
}