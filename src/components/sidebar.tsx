import { Button } from "~/components/ui/button"
import { Folder, File, Star, Clock, Trash } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Google Drive</h2>
      <nav>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Folder className="mr-2 h-4 w-4" /> My Drive
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <File className="mr-2 h-4 w-4" /> Shared with me
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Star className="mr-2 h-4 w-4" /> Starred
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Clock className="mr-2 h-4 w-4" /> Recent
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Trash className="mr-2 h-4 w-4" /> Trash
        </Button>
      </nav>
    </div>
  )
}

