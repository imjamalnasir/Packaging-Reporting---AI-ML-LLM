

import ChooseClient from "@/components/packiq/auth/choose-client";
import { EnterOtp } from "@/components/packiq/auth/enter-otp";
import { OtpMethod } from "@/components/packiq/auth/otp-method";
import { SignIn } from "@/components/packiq/auth/sign-in";

export default function Signin() {
  return (
    <div className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignIn/>
        <OtpMethod/>
        <EnterOtp/>
        <ChooseClient />
      </div>
    </div>
  )
}