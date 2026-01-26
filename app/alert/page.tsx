import { AlertDialogDemo } from "@/components/AlertDialogDemo"
export default function AlertSample() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        Hi this is Alert Sample page made by jamal
        <AlertDialogDemo />
      </div>
    </div>
  )
}