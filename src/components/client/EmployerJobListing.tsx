import { EmployerSidebar } from "./EmployerSidebar";


export function EmployerJobListingComponent() {
    return (
        <>
        <EmployerSidebar />

        <div className="flex flex-col justify-center items-center mt-4">
            <h2>Your Listings</h2>
        </div>
        </>
    )
}