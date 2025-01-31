import React from 'react'

export function Avatar({ children, className, ...props }) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props}>
      {children}
    </div>
  )
}
export function AvatarImage({ src, alt, className, ...props }) {
  const handleError = (e) => {
    e.target.src = "..../assets/react.svg"; // Fallback to placeholder
  };

  return (
    <img
      className={`aspect-square h-full w-full ${className}`}
      src={src}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}


export function AvatarFallback({ children, className, ...props }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
