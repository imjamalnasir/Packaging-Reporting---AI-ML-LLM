'use client';

import { useSearchParams } from 'next/navigation';

import { EnterOtpGetToken } from "@/components/packiq/auth/enter-otp-get-token";



export default function EnterOtpPage() {

    const searchParams = useSearchParams();

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-1xl">
        <EnterOtpGetToken otpmethod={method} />
       
      </div>
    </div>
  );
}