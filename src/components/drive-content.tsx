"use client"

import { useState } from "react"
import { Folder, File, ChevronRight } from "lucide-react"
import { Button } from "~/components/ui/button"

type Item = {
  id: string
  name: string
  type: "folder" | "file"
  size?: string
  children?: Item[]
}

const mockData: Item[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    size: "--",
    children: [
      { id: "1-1", name: "Resume.pdf", type: "file", size: "1.2 MB" },
      { id: "1-2", name: "Cover Letter.docx", type: "file", size: "358 KB" },
      {
        id: "1-3",
        name: "Project Files",
        type: "folder",
        size: "--",
        children: [
          { id: "1-3-1", name: "Proposal.pptx", type: "file", size: "2.7 MB" },
          { id: "1-3-2", name: "Budget.xlsx", type: "file", size: "1.5 MB" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Photos",
    type: "folder",
    size: "--",
    children: [
      {
        id: "2-1",
        name: "Vacation",
        type: "folder",
        size: "--",
        children: [
          { id: "2-1-1", name: "Beach.jpg", type: "file", size: "3.5 MB" },
          { id: "2-1-2", name: "Mountain.jpg", type: "file", size: "2.8 MB" },
          { id: "2-1-3", name: "City.jpg", type: "file", size: "4.2 MB" },
        ],
      },
      { id: "2-2", name: "Family.jpg", type: "file", size: "5.1 MB" },
      { id: "2-3", name: "Friends.png", type: "file", size: "3.8 MB" },
    ],
  },
  { id: "3", name: "Project Proposal.pptx", type: "file", size: "5.5 MB" },
  {
    id: "4",
    name: "Music",
    type: "folder",
    size: "--",
    children: [
      { id: "4-1", name: "Playlist 1", type: "folder", size: "--", children: [] },
      { id: "4-2", name: "Summer Hits.mp3", type: "file", size: "8.2 MB" },
    ],
  },
  { id: "5", name: "Notes.txt", type: "file", size: "12 KB" },
]

export default function DriveContent() {
  const [currentFolder, setCurrentFolder] = useState<Item[]>(mockData)
  const [breadcrumbs, setBreadcrumbs] = useState<Item[]>([])

  const handleItemClick = (item: Item) => {
    if (item.type === "folder") {
      setCurrentFolder(item.children ?? [])
      setBreadcrumbs([...breadcrumbs, item])
    } else {
      // For files, you would typically open or download the file
      console.log(`Opening file: ${item.name}`)
    }
  }

  const handleBreadcrumbClick = (index: number) => {
    if (index === -1) {
      setCurrentFolder(mockData)
      setBreadcrumbs([])
    } else {
      const newBreadcrumbs = breadcrumbs.slice(0, index + 1)
      setBreadcrumbs(newBreadcrumbs)
      const lastBreadcrumb = newBreadcrumbs[newBreadcrumbs.length - 1]
      setCurrentFolder(lastBreadcrumb?.children ?? []);
    }
  }

  return (
    <div>
      <div className="flex items-center mb-4 text-sm">
        {breadcrumbs.length > 0 ? (
          <>
            <Button
              variant="link"
              className="text-gray-400 hover:text-gray-100 pl-0"
              onClick={() => handleBreadcrumbClick(-1)}
            >
              My Drive
            </Button>
            {breadcrumbs.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <ChevronRight className="mx-2 h-4 w-4 text-gray-500" />
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-gray-100"
                  onClick={() => handleBreadcrumbClick(index)}
                >
                  {item.name}
                </Button>
              </div>
            ))}
          </>
        ) : null}
      </div>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700 text-gray-300 text-sm font-medium">
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Size</th>
            </tr>
          </thead>
          <tbody>
            {currentFolder.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-700 last:border-b-0 hover:bg-gray-700 transition-colors"
              >
                <td className="px-4 py-3">
                  <button
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.type === "folder" ? (
                      <Folder className="h-5 w-5 mr-3 text-blue-400" />
                    ) : (
                      <File className="h-5 w-5 mr-3 text-gray-400" />
                    )}
                    <span className="text-sm text-gray-200 hover:text-white">{item.name}</span>
                  </button>
                </td>
                <td className="px-4 py-3 text-sm text-gray-400 capitalize">{item.type}</td>
                <td className="px-4 py-3 text-sm text-gray-400">{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
