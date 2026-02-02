


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
//import { Badge } from "lucide-react"
import { Badge } from "@/components/ui/badge"


import {
Siren,
FileCheck,
ShieldAlert,
Eye,
FileBox,
FileChartColumn,
FileSpreadsheet,


} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const recentUploads = [
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
    {
        uploadId: "UPL-003",
        fileName: "Packaging_Specs_Q1_2026.pdf",
        type: "Sales",
        uploadedBy: "John Doe",
        dataTime: "2026-01-01 10:30 AM",
        records: "145",
        status: "Errors",
    },
    {
        uploadId: "UPL-004",
        fileName: "Packaging_Specs_Q1_2026.pdf",
        type: "Packaging",
        uploadedBy: "John Doe",
        dataTime: "2026-01-01 10:30 AM",
        records: "145",
        status: "Completed",
    },
    {
        uploadId: "UPL-005",
        fileName: "Packaging_Specs_Q1_2026.pdf",
        type: "Packaging",
        uploadedBy: "John Doe",
        dataTime: "2026-01-01 10:30 AM",
        records: "145",
        status: "Errors",
    },
    {
        uploadId: "UPL-006",
        fileName: "Packaging_Specs_Q1_2026.pdf",
        type: "BOM",
        uploadedBy: "John Doe",
        dataTime: "2026-01-01 10:30 AM",
        records: "145",
        status: "Processing",
    },
]

type Props = {
  type: string
}

//export function PackiqRecentUpload({ type }: Props) {





export default function ReportReview(){



        const uploadType = (type: string) => {
        switch (type) {
            case "Packaging":
                return "bg-green-100 text-green-800 border-green-200"      // green
            case "Sales":
                return "bg-yellow-100 text-yellow-800 border-yellow-200"      // yellow
            case "BOM":
                return "bg-blue-100 text-blue-800 border-blue-200"  // red
            default:
                return "bg-green-100 text-green-800 border-green-200"
        }
    }



        const uploadTypeIcon = (type: string) => {
        switch (type) {
            case "Packaging":
                return FileBox      // icon
            case "Sales":
                return FileChartColumn      // icon
            case "BOM":
                return FileSpreadsheet  // icon
            default:
                return FileBox
        }
    }

    //const UploadTypeIconCom = uploadTypeIcon(type);


    const uploadStatus = (status: string) => {
        switch (status) {
            case "Completed":
                return "default"      // green
            case "Processing":
                return "secondary"      // yellow
            case "Errors":
                return "destructive"  // red
            default:
                return "outline"
        }

    }



    return (



        <>
        <Card className="px-6 mx-10 ">
    <Accordion
      type="multiple"
      
      
    >
      <AccordionItem value="shipping" className="m-0 pb-4">
        <AccordionTrigger className="m-0 p-0 items-center">

               <div className="flex flex-col">
          <div>All States</div>
          <div>
            Weight: 50,280 lbs
  •
  Fee: $110,234.80
          </div>
          </div>
       
            
            
            </AccordionTrigger>


        <AccordionContent className="pt-10">
     
      <Table>
                 
                 <TableHeader>
                     <TableRow>
                         <TableHead className="w-[100px]">Upload ID</TableHead>
                         <TableHead>File Name</TableHead>
                         <TableHead>Type</TableHead>
                         <TableHead >Uploaded By</TableHead>
                         <TableHead >Data & Time</TableHead>
                         <TableHead >Records</TableHead>
                         <TableHead >Status</TableHead>
                     </TableRow>
                 </TableHeader>
                 <TableBody>
                     {recentUploads.map((recentUpload) => (
                         <TableRow key={recentUpload.uploadId}>
                             <TableCell className="font-medium">{recentUpload.uploadId}</TableCell>
     
                             <TableCell>{recentUpload.fileName}</TableCell>
                             <TableCell ><Badge variant="outline" className={uploadType(recentUpload.type)}>{recentUpload.type}</Badge></TableCell>
                             <TableCell >{recentUpload.uploadedBy}</TableCell>
                             <TableCell >{recentUpload.dataTime}</TableCell>
                             <TableCell >{recentUpload.records}</TableCell>
                             <TableCell ><Badge variant={uploadStatus(recentUpload.status)}>{recentUpload.status}</Badge></TableCell>
                         </TableRow>
                     ))}
                 </TableBody>
             </Table>


        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="shipping" className="m-0 pb-4">
        <AccordionTrigger className="m-0  items-center">

               <div className="flex flex-col">
          <div>All States</div>
          <div>
            Weight: 50,280 lbs
  •
  Fee: $110,234.80
          </div>
          </div>
       
            
            
            </AccordionTrigger>


        <AccordionContent className="pt-10">
     
      <Table>
                 
                 <TableHeader>
                     <TableRow>
                         <TableHead className="w-[100px]">Upload ID</TableHead>
                         <TableHead>File Name</TableHead>
                         <TableHead>Type</TableHead>
                         <TableHead >Uploaded By</TableHead>
                         <TableHead >Data & Time</TableHead>
                         <TableHead >Records</TableHead>
                         <TableHead >Status</TableHead>
                     </TableRow>
                 </TableHeader>
                 <TableBody>
                     {recentUploads.map((recentUpload) => (
                         <TableRow key={recentUpload.uploadId}>
                             <TableCell className="font-medium">{recentUpload.uploadId}</TableCell>
     
                             <TableCell>{recentUpload.fileName}</TableCell>
                             <TableCell ><Badge variant="outline" className={uploadType(recentUpload.type)}>{recentUpload.type}</Badge></TableCell>
                             <TableCell >{recentUpload.uploadedBy}</TableCell>
                             <TableCell >{recentUpload.dataTime}</TableCell>
                             <TableCell >{recentUpload.records}</TableCell>
                             <TableCell ><Badge variant={uploadStatus(recentUpload.status)}>{recentUpload.status}</Badge></TableCell>
                         </TableRow>
                     ))}
                 </TableBody>
             </Table>


        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="shipping" className="m-0 pb-4">
        <AccordionTrigger className="m-0 p-0 items-center">

               <div className="flex flex-col">
          <div>All States</div>
          <div>
            Weight: 50,280 lbs
  •
  Fee: $110,234.80
          </div>
          </div>
       
            
            
            </AccordionTrigger>


        <AccordionContent className="pt-10">
     
      <Table>
                 
                 <TableHeader>
                     <TableRow>
                         <TableHead className="w-[100px]">Upload ID</TableHead>
                         <TableHead>File Name</TableHead>
                         <TableHead>Type</TableHead>
                         <TableHead >Uploaded By</TableHead>
                         <TableHead >Data & Time</TableHead>
                         <TableHead >Records</TableHead>
                         <TableHead >Status</TableHead>
                     </TableRow>
                 </TableHeader>
                 <TableBody>
                     {recentUploads.map((recentUpload) => (
                         <TableRow key={recentUpload.uploadId}>
                             <TableCell className="font-medium">{recentUpload.uploadId}</TableCell>
     
                             <TableCell>{recentUpload.fileName}</TableCell>
                             <TableCell ><Badge variant="outline" className={uploadType(recentUpload.type)}>{recentUpload.type}</Badge></TableCell>
                             <TableCell >{recentUpload.uploadedBy}</TableCell>
                             <TableCell >{recentUpload.dataTime}</TableCell>
                             <TableCell >{recentUpload.records}</TableCell>
                             <TableCell ><Badge variant={uploadStatus(recentUpload.status)}>{recentUpload.status}</Badge></TableCell>
                         </TableRow>
                     ))}
                 </TableBody>
             </Table>


        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </Card>



        
        </>
    
    )


}