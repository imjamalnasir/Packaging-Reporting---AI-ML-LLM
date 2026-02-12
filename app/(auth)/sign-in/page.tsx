import { SignIn } from "@/components/packiq/auth/sign-in";
import { SignInAll } from "@/components/packiq/sign-in";

export default function SignInPage(){

    return(

        <>

            <div className=" flex min-h-[calc(100vh-64px)]  flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignIn/>
        
        
        </div>
        </div>
        </>
    )
}