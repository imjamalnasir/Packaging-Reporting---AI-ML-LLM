import ChatWindow from "@/components/packiq/chat-window";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

export default function ComplianceAssistant() {
  return (
    <>
        <div className="flex flex-col min-h-screen">
          <div>
          <CardHeader  className="py-4 flex flex-row items-start justify-between gap-4">
            <div className="space-y-1.5">
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          Compliance Assistant
          </CardTitle>
          <CardDescription>
            Ask questions about EPR requirements and regulations
          </CardDescription>
          </div>
          <CardAction>
            <Button >View History</Button>
          </CardAction>
        </CardHeader>
        </div>
        <div className="p-6 flex flex-row gap-4">
         <div className="basis-3/4">
          <ChatWindow/>
          </div>
          <div className="basis-1/4 flex flex-col gap-4">
          <div>
                  <Card>
            <CardHeader>
              <CardTitle>About This Assistant</CardTitle>
              <CardDescription>The Compliance Assistant uses AI to help you understand EPR regulations across all U.S. states. It provides:</CardDescription>
              
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-outside mx-4 gap-2 flex flex-col">
                <li>Real-time regulatory guidance</li>
                <li>Citation-backed answers</li>
                <li>Links to your packaging data</li>
                <li>Audit trail for compliance</li>
              </ul>
              
            </CardContent>
            <CardFooter>
              <Button variant="link" >View More</Button>
            </CardFooter>
          </Card>
          </div>
                    <div>
                  <Card>
            <CardHeader>
              <CardTitle>Suggested Questions</CardTitle>
              <CardDescription>The Compliance Assistant uses AI to help you understand EPR regulations across all U.S. states. It provides:</CardDescription>
              
            </CardHeader>
            <CardContent>
              <ul className="list-none list-outside mx-0 gap-3 flex flex-col">
                <li>What are the reporting requirements for California EPR?</li>
                <li>How do I calculate recycled content percentage?</li>
                <li>What materials are covered under Maine EPR?When is the deadline for Q4 2025 Oregon report?</li>
                
              </ul>
              
            </CardContent>
            <CardFooter>
              <Button variant="link" >View More</Button>
            </CardFooter>
          </Card>
          </div>
                    <div>
                  <Card>
            <CardHeader>
              <CardTitle>Recent Queries</CardTitle>
              <CardDescription>The Compliance Assistant uses AI to help you understand EPR regulations across all U.S. states. It provides:</CardDescription>
              
            </CardHeader>
            <CardContent>
              <ul className="list-none list-outside mx-0 gap-3 flex flex-col">
                <li>California packaging fee calculation</li>
                <li>Maine EPR compliance timeline</li>
                <li>California packaging fee calculation</li>
                <li>Maine EPR compliance timeline</li>
              </ul>
              
            </CardContent>
            <CardFooter>
              <Button variant="link" >View More</Button>
            </CardFooter>
          </Card>
          </div>
   
          </div>
          </div>
        </div>
    </>

  )
}