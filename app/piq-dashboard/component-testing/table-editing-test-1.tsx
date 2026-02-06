"use client"

import { useState } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const initialUploads = [
  {
    uploadId: "UPL-001",
    fileName: "Packaging_Specs_Q1_2026.pdf",
    type: "Packaging",
    uploadedBy: "John Doe",
    dataTime: "2026-01-01 10:30 AM",
    records: "145",
    status: "Completed",
  },
  {
    uploadId: "UPL-002",
    fileName: "Packaging_Specs_Q1_2026.pdf",
    type: "BOM",
    uploadedBy: "John Doe",
    dataTime: "2026-01-01 10:30 AM",
    records: "145",
    status: "Processing",
  },
]

export function TableEditingTestV1() {
  const [data, setData] = useState(initialUploads)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editedRow, setEditedRow] = useState<any>({})

  const startEdit = (row: any) => {
    setEditingId(row.uploadId)
    setEditedRow(row)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditedRow({})
  }

  const saveEdit = () => {
    setData((prev) =>
      prev.map((row) =>
        row.uploadId === editingId ? editedRow : row
      )
    )
    setEditingId(null)
    setEditedRow({})
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Uploads</CardTitle>
        <CardDescription>
          List of recent uploaded files and their status.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Upload ID</TableHead>
              <TableHead>File Name</TableHead>
              <TableHead>Uploaded By</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Records</TableHead>
              <TableHead className="w-[180px]">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((row) => {
              const isEditing = editingId === row.uploadId

              return (
                <TableRow key={row.uploadId}>
                  <TableCell className="font-medium">
                    {row.uploadId}
                  </TableCell>

                  <TableCell>
                    {isEditing ? (
                      <Input
                        value={editedRow.fileName}
                        onChange={(e) =>
                          setEditedRow({
                            ...editedRow,
                            fileName: e.target.value,
                          })
                        }
                      />
                    ) : (
                      row.fileName
                    )}
                  </TableCell>

                  <TableCell>
                    {isEditing ? (
                      <Input
                        value={editedRow.uploadedBy}
                        onChange={(e) =>
                          setEditedRow({
                            ...editedRow,
                            uploadedBy: e.target.value,
                          })
                        }
                      />
                    ) : (
                      row.uploadedBy
                    )}
                  </TableCell>

                  <TableCell>
                    {isEditing ? (
                      <Input
                        value={editedRow.dataTime}
                        onChange={(e) =>
                          setEditedRow({
                            ...editedRow,
                            dataTime: e.target.value,
                          })
                        }
                      />
                    ) : (
                      row.dataTime
                    )}
                  </TableCell>

                  <TableCell>
                    {isEditing ? (
                      <Input
                        value={editedRow.records}
                        onChange={(e) =>
                          setEditedRow({
                            ...editedRow,
                            records: e.target.value,
                          })
                        }
                      />
                    ) : (
                      row.records
                    )}
                  </TableCell>

                  <TableCell>
                    {isEditing ? (
                      <div className="flex gap-2">
                        <Button size="sm" onClick={saveEdit}>
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={cancelEdit}
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => startEdit(row)}
                      >
                        Edit
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
