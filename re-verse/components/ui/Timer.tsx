"use client"
import React, { useEffect, useState } from 'react'

const Timer = ({ initialTime , onTimeUp }:{initialTime:number ,onTimeUp:any}) => {
    const [timeLeft, setTimeLeft] = useState(initialTime)
  
    useEffect(() => {
      if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
        return () => clearTimeout(timer)
      } else {
        onTimeUp()
      }
    }, [timeLeft, onTimeUp])
  
    return (
      <div className="text-3xl font-semibold text-red-600">
        {timeLeft}s
      </div>
    )
  }

export default Timer