import DriveContent from "~/components/drive-content"
import { Button } from "~/components/ui/button"
import { Upload } from "lucide-react"

export default function DrivePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Drive</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Upload className="mr-2 h-4 w-4" /> Upload
          </Button>
        </div>
        <DriveContent />
      </div>
    </div>
  )
}

