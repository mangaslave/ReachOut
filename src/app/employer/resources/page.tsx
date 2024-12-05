"use server";

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import {EmployerResources} from "@/components/client/EmployerResources";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";

export default async function ResourcesPage() {
  const {getUser, isAuthenticated} = getKindeServerSession();
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/");
  }

  const user = await getUser();
  const isEmployer = await AddKindeUserToDb(user, 2);

  if (!isEmployer?.companyId) {
    redirect("/");
  }

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return <EmployerResources activeUser={activeUser} />;
}
