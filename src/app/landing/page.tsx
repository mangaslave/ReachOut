"use server";
import LandingPageContent from "@/components/client/LandingPage";
import {Button} from "@/components/ui/button";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function Landing() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  return <LandingPageContent />;
}
