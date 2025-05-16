import React from 'react'
import "./Loading.css"
const LoadingSpinner = () => {
  return (
    <div>
      <div class="loading-container">
        <div class="loader">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner