"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { UploadCloud } from "lucide-react"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setProgress(20)

    const formData = new FormData()
    formData.append("file", file)

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    })

    setProgress(100)
    setUploading(false)
    alert("Upload complete!")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40 p-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <UploadCloud className="mx-auto h-10 w-10 text-primary mb-2" />
          <CardTitle>Upload File</CardTitle>
          <CardDescription>Select a file to upload</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />

          {uploading && <Progress value={progress} />}

          <Button
            className="w-full"
            onClick={handleUpload}
            disabled={!file || uploading}
          >
            {uploading ? "Uploading..." : "Upload"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}