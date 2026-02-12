import { EnterOtp } from "@/components/packiq/auth/enter-otp";

export default function EnterOtpPage (){

    return(

        <>
            <div className=" flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-6 md:p-10">
                            <div className="w-full max-w-sm md:max-w-1xl">
                              <EnterOtp/>
                              </div>
                              </div>
        </>
    )

}