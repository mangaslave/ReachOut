"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation"
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import {PotentialEmployeesClient} from "@/components/client/PotentialEmployeesClient"

export default async function PotentialEmployees() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  console.log("User:", user)
  if (!user) {
    redirect("/");
  }
  await AddKindeUserToDb();

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return <PotentialEmployeesClient activeUser={activeUser} />;
}
