'use client'

import React from 'react'
import { X } from 'lucide-react'
import { Button } from './button'

export function Dialog({ children, open, onOpenChange }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
        <Button className="absolute right-4 top-4 bg-white bg-opacity-50 " variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
          <X className="h-4 w-4" />
        </Button>
        {children}
      </div>
    </div>
  )
}

export function DialogContent({ children }) {
  return <div>{children}</div>
}

