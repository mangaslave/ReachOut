"use client"

import { Sidebar } from "./SideBar";
import { useState } from "react";
import InboxPreview from "./InboxPreview";
import Header from "./Header";

export default function Inbox({
    activeUser,
  }: {
    activeUser: {name: string; email: string; image: string};
  }) {

    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <div className="flex h-screen overflow-hidden bg-gray-100">
                <div className={`w-1/4 ${collapsed ? "hidden" : "block"}`}>
                    <Sidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed}/>
                </div>
                <div className="ml-[-5rem] mt-[-3rem]">
                    <header className="border-caribbeanCurrant border-b pb-3">
                        <h1 className="text-2xl font-bold mt-20">Inbox</h1>
                        <p className="text-sm text-gray-600">See messages from others.</p>
                    </header>
                    <main className="flex">
                        <section className="flex-col justify-center items-center">
                            <form>
                                <input type="text" placeholder="Search..." className="p-2 w-80 mt-10 rounded border border-gray-500"/>
                            </form>
                            <div className="flex justify-evenly border-2 border-caribbeanCurrant bg-gray-200 rounded-xl mt-3 p-1 w-80">
                                <button className="bg-caribbeanCurrant text-white w-16 text-center rounded-lg font-medium">All</button>
                                <button className="hover:bg-caribbeanCurrant hover:text-white w-16 text-center rounded-lg hover:font-medium">Read</button>
                                <button className="hover:bg-caribbeanCurrant hover:text-white w-16 text-center rounded-lg hover:font-medium">Unread</button>
                            </div>
                            <InboxPreview sender="ReachOut" subject="Match Found!" time="12:21PM" content="Hey Giselle! ReachOut has found a match for Leon Howard for..."/>
                            <div className="w-10/12 h-px bg-caribbeanCurrant my-7"></div>
                            <InboxPreview sender="Samuel Robinson" subject="Application Status" time="10:02AM" content="Hey! Your client Gregory Wick's resume is currently..."/>
                            <div className="w-10/12 h-px bg-caribbeanCurrant my-7"></div>
                            <InboxPreview sender="Sarah Duvale" subject="New Job Match" time="Yesterday" content="So I've seen a couple of companies that I think want to get into..."/>
                        </section> 
                        <section className="-ml-16">
                            <div className="bg-caribbeanCurrant w-px h-full"></div> 
                        </section>
                        <section className="flex items-center justify-center h-screen">
                            <div className="m-72">No message selected...</div>
                        </section>
                    </main>                   
                </div>
            </div>
        </>
    )
}