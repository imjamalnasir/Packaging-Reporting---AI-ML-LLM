export const runtime = "nodejs";



import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"
const GOOGLE_API_KEY="AIzaSyC1NmtYxJZROuZ5rdXfKPPAJxJXV5e48RY"
//const GOOGLE_API_KEY="AIzaSyA1qVIMRQA9Cak8EUO52MH81HTBWLaVi7I"
const genAIKey = GOOGLE_API_KEY
//const genAIKey = process.env.GOOGLE_API_KEY
const genAI = new GoogleGenerativeAI(genAIKey!)
console.log("Loaded API Key:", genAIKey?.slice(0, 5) + "...") 



export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
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
