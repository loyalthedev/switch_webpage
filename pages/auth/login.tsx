import { useRouter } from "next/router";
import Header from "../(components)/Header";
import LoginForm from "../(components)/LoginForm";
import Footer from "../(components)/Footer";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12 flex justify-center items-center min-h-[60vh]">
        <LoginForm onSwitchToSignup={() => router.push("/")} />
      </main>
      <Footer />
    </div>
  );
}
