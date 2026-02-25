
'use client'
import { useSearchParams } from "next/navigation"

import { EnterOtp } from "@/components/packiq/auth/enter-otp";
import { EnterOtpGetToken } from "@/components/packiq/auth/enter-otp-get-token";
import { EnterOtpIntegrated } from "@/components/packiq/auth/enter-otp-integrated";

export default function EnterOtpPage (){

const searchParams = useSearchParams()
const method = searchParams.get("method") ?? ""
  //const otp = searchParams.get("otp") ?? ""

    return(

        <>
            <div className=" flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-6 md:p-10">
                            <div className="w-full max-w-sm md:max-w-1xl">
                               
                              {/*<EnterOtp otpmethod={method} otp={otp}/>*/}
                              {/*<EnterOtpIntegrated {/*otpmethod={method} otp={otp}}/>*/}  
                              {/*<EnterOtpIntegrated otpmethod={method}/>*/}
                              <EnterOtpGetToken otpmethod={method} userId="01"/>
                                                          
                          
                              </div>
                              </div>
        </>
    )

}