"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! How can I help you?", sender: "bot" },
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input, sender: "user" },
    ])
    setInput("")
  }

  return (
    <Card className="w-full max-w-md h-[500px] flex flex-col">
  <CardHeader className="border-b shrink-0">
    <div className="font-semibold">Chat</div>
  </CardHeader>

  {/* 👇 min-h-0 is CRITICAL */}
  <CardContent className="flex-1 min-h-0 p-0 overflow-hidden">
    <ScrollArea className="h-full">
      <div className="p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "bot" && (
              <Avatar>
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
            )}

            <div
              className={`rounded-lg px-4 py-2 max-w-[70%] text-sm ${
                message.sender === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {message.text}
            </div>

            {message.sender === "user" && (
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  </CardContent>

  {/* 👇 shrink-0 prevents footer from collapsing */}
  <CardFooter className="border-t gap-2 shrink-0">
    <Input
      placeholder="Type a message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
    />
    <Button onClick={sendMessage}>Send</Button>
  </CardFooter>
</Card>

  )
}
