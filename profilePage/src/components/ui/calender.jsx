import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'

export function Calendar({ className, selected, onSelect, disabledDates = [], ...props }) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Helper to check if a date is disabled
  const isDateDisabled = (date) =>
    disabledDates.some((disabledDate) => date.toDateString() === new Date(disabledDate).toDateString())

  return (
    <div className={`p-3 ${className}`} {...props}>
      <div className="flex justify-between items-center mb-4">
        <Button onClick={handlePrevMonth} variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div>
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <Button onClick={handleNextMonth} variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="text-center text-sm font-medium">
            {day}
          </div>
        ))}
        {Array(firstDayOfMonth).fill(null).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {days.map((day) => {
          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
          const isSelected = selected && date.toDateString() === selected.toDateString()
          const isDisabled = isDateDisabled(date)
          return (
            <Button
              key={day}
              onClick={() => !isDisabled && onSelect(date)}
              variant={isSelected ? 'default' : 'outline'}
              className={`w-full ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isDisabled}
            >
              {day}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
