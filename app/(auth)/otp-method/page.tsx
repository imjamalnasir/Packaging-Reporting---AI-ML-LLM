import { OtpMethod } from "@/components/packiq/auth/otp-method";

export default function OtpMethodPage(){

    return(

        <>
        
                <div className=" flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-6 md:p-10">
                    <div className="w-full max-w-sm md:max-w-1xl">
                      <OtpMethod/>
                      </div>
                      </div>
        
        </>
    )
}