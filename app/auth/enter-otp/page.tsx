import { EnterOtpGetToken } from "@/components/packiq/auth/enter-otp-get-token";

interface EnterOtpPageProps {
  searchParams: {
    method?: string;
  };
}

export default function EnterOtpPage({ searchParams }: EnterOtpPageProps) {
  const method = searchParams?.method ?? "";

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-1xl">
        <EnterOtpGetToken otpmethod={method} userId="01" />
      </div>
    </div>
  );
}