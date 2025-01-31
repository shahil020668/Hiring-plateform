import { Button } from "../components/ui/button"
import { MessageCircle, Bookmark } from 'lucide-react'

export default function FixedActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex gap-3 justify-center">
      <Button className="w-full max-w-xs">
        Hire Now
      </Button>
      <Button variant="outline" className="w-full max-w-xs">
        <MessageCircle className="w-4 h-4 mr-2" />
        Message
      </Button>
      <Button variant="outline" size="icon">
        <Bookmark className="w-4 h-4" />
      </Button>
    </div>
  )
}

