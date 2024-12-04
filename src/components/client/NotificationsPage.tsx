"use client";

import { Sidebar } from "./SideBar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Header from "./Header";

export default function Inbox({ activeUser }: { activeUser: { name: string; email: string; image: string } }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: "Sharon Mills | Newnham Works",
      time: "4h",
      message: "Hey! Your client Gregory Wick's resume...",
      imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/15345c41332353.57a1ce9141249.jpg",
      isUnread: true,
    },
    {
      id: 2,
      name: "Victor Banks | Cambell Construc...",
      time: "4h",
      message: "Hello! I'm reaching out to let you know...",
      imgSrc: "https://th.bing.com/th/id/R.36da1d5d8a3ddcc2cd86faf1ff7fd9e5?rik=yBaJPa0CYz53RQ&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2ffunny-avatars-icons-69.jpg&ehk=nvoft58qAsT3lXOro7N9naT81HQLMv8ogJm5AVQoTWQ%3d&risl=&pid=ImgRaw&r=0",
      isUnread: true,
    },
    {
      id: 3,
      name: "James Harper | Tech Solutions",
      time: "1d",
      message: "Your recent invoice has been processed...",
      imgSrc: "https://media.istockphoto.com/id/1372744282/photo/head-shot-portrait-smiling-bearded-man-talking-at-camera.jpg?s=612x612&w=0&k=20&c=K1uPpr7UfA0ivMeeVhagG5DIQhhwNSbUH4-L0qwJqvw=",
      isUnread: false,
    },
    {
      id: 4,
      name: "Laura Chen | Design Studio",
      time: "2d",
      message: "The new designs are ready for review...",
      imgSrc: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
      isUnread: false,
    },
  ]);

  const [collapsed, setCollapsed] = useState(false);

  const [view, setView] = useState<"all" | "unread">("unread");

  const toggleReadStatus = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isUnread: !notification.isUnread }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.isUnread ? { ...notification, isUnread: false } : notification
      )
    );
  };

  const displayedNotifications =
    view === "all"
      ? notifications
      : notifications.filter((notification) => notification.isUnread);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed} />

      <div className={cn("flex-1 flex flex-col ml-16 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
        <Header headerMsg="Notifications" subHeadingMsg="View your recent notifications" />

        <main className="flex-1 overflow-y-auto pt-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <div className="flex text-black text-lg">
                  <button
                    className={cn("px-3 py-2 cursor-pointer", view === "all" && "font-bold")}
                    onClick={() => setView("all")}
                  >
                    All
                  </button>
                  <span className="py-2">|</span>
                  <button
                    className={cn("px-3 py-2 cursor-pointer", view === "unread" && "font-bold")}
                    onClick={() => setView("unread")}
                  >
                    Unread
                  </button>
                </div>
                <button
                  className="bg-caribbeanCurrant text-white px-4 py-2 rounded"
                  onClick={markAllAsRead}
                >
                  Mark all as read
                </button>
              </div>

              {/* Notifications */}
              <div className="space-y-4">
                {displayedNotifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    toggleReadStatus={toggleReadStatus}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function NotificationCard({
  notification,
  toggleReadStatus,
}: {
  notification: { id: number; name: string; time: string; message: string; imgSrc: string; isUnread: boolean };
  toggleReadStatus: (id: number) => void;
}) {
  return (
    <div
      className={cn(
        "w-full h-24 rounded-lg flex items-center p-4 shadow-sm bg-white relative",
        notification.isUnread ? "border border-orchidPink" : "border border-transparent"
      )}
    >
      <img className="h-16 w-16 object-cover rounded-full" src={notification.imgSrc} alt={notification.name} />
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-black">{notification.name}</p>
          <p className="text-lg text-gray-500">{notification.time}</p>
        </div>
        <p className="text-lg text-black mt-1">{notification.message}</p>
        <button
          className="text-sm text-caribbeanCurrant underline mt-1 cursor-pointer"
          onClick={() => toggleReadStatus(notification.id)}
        >
          {notification.isUnread ? "Mark as read" : "Mark as unread"}
        </button>
      </div>
    </div>
  );
}
