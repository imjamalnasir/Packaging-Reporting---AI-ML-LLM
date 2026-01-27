import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAIKey = process.env.GOOGLE_API_KEY
const genAI = new GoogleGenerativeAI(genAIKey!)
console.log("Loaded API Key:", genAIKey?.slice(0, 5) + "...") 



export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    })

    const result = await model.generateContent(message)
    const response = result.response.text()

    return NextResponse.json({ reply: response })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
