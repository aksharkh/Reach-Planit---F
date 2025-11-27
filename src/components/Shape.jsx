import React from 'react'

const Shape = () => {
  return (
    <div
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                  backgroundColor: '#ffff',
                  '--r': '20px',
                  '--s': '40px',
                  '--_m': '/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%) no-repeat',
                  mask: `right 0 bottom calc(var(--s) + var(--r)) var(--_m),
                     right calc(var(--s) + var(--r)) bottom 0 var(--_m),
                     radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) 
                     calc(-1*var(--r)) calc(-1*var(--r)) no-repeat,
                     conic-gradient(from 90deg at calc(100% - var(--s) - 2*var(--r)) calc(100% - var(--s) - 2*var(--r)),
                     #0000 25%,#000 0)`
                }}
              ></div>
  )
}

export default Shape