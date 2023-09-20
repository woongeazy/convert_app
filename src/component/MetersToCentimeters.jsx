import React, { useState } from 'react'
import styles from './MetersToCentimeters.module.css'
function MetersToCentimeters() {
    const [amount, setAmount] = useState("1");
    const [disabled, setDisabled] = useState(false);
    function handleChange(e){
        setAmount(e.target.value)
    }
    function handleInverse(){
        setDisabled(prev => !prev);
    }
    function handleReset(){
        setDisabled(false)
    }
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className="column-a">
                <input type="text" id="meter" value={disabled ? amount / 100 : amount } disabled={disabled} onChange={handleChange} />
                <label htmlFor="meter">미터(m)</label>
            </div>
            <div className="column-b">
                <p>=</p>
            </div>
            <div className="column-c">
                <input type="text" id="centimeter" value={!disabled ? amount * 100 : amount } disabled={!disabled} onChange={handleChange} />
                <label htmlFor="centimeter">센티미터(cm)</label>
            </div>
        </div>
            <div className={styles.btns}>
                <button className={styles.inverse} onClick={handleInverse}>입력반전</button>
                <button className={styles.reaset} onClick={handleReset}>초기화</button>
            </div>
    </div>
  )
}

export default MetersToCentimeters