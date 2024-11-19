"use server";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import DashboardClient from "@/components/client/DashboardComponent";

export default async function DashboardPage() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  if (!user) {
    // redirect("/");
    console.log("No user found in dashboard (server)");
  }
  let defaultUser = {
    id: "kp_07e97ee93e1946b49176f01d02949c38",
    email: "kyleeeles@gmail.com",
    family_name: "Eeles",
    given_name: "Kyle",
    picture: "https://lh3.googleusercontent.com/a/ACg8ocL1E2TsuDSbVonLPAiCgys9jE4T-SRLu1vjLAsvLTahfD0CIg=s96-c",
    username: "undefined",
    phone_number: "undefined",
  };

  await AddKindeUserToDb();

  const activeUser = {
    name: `${user?.given_name ? user.given_name : defaultUser.given_name} ${
      user?.family_name ? user.family_name : defaultUser.family_name
    }`,
    email: `${user?.email ? user.email : defaultUser.email}`,
    image: `${user?.picture ? user.picture : defaultUser.picture}`,
  };

  return <DashboardClient user={activeUser} />;
}
