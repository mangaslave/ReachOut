import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export function MessageComponent() {
    return (
        <div className="p-3 rounded-md bg-white shadow-md max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-bold">New Messages</h2>
                <a href="#" className="text-base underline">Go To Inbox</a>
            </div>
                <div className="flex items-center justify-between mb-3 last:mb-0">
                    <div className="flex items-center gap-3 min-w-0">
                        <Avatar className="h-10 w-10 shrink-0">
                            <AvatarImage src="/static/images/Ellipse25.svg" alt="Profile" />
                            <AvatarFallback>PL</AvatarFallback>
                        </Avatar>
                        <p className="text-base truncate">Paul Lee | Newnham Works Ltd.</p>
                    </div>
                    <Button 
                        className="bg-spaceCadet text-white text-white px-4 py-2 rounded-lg flex items-center gap-2 shrink-0"
                    >
                        <svg width="20" height="16" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.38889 2.35714L10.8717 8.61665L10.8745 8.61894C11.8165 9.29389 12.2877 9.63156 12.8038 9.76201C13.26 9.8773 13.7396 9.8773 14.1958 9.76201C14.7124 9.63144 15.185 9.29278 16.1286 8.61665C16.1286 8.61665 21.5696 4.53663 24.6111 2.35714M1 15.6574V5.34312C1 3.82298 1 3.06234 1.30276 2.48172C1.56907 1.971 1.99371 1.55607 2.51638 1.29584C3.11058 1 3.88901 1 5.44472 1H21.5558C23.1115 1 23.8883 1 24.4825 1.29584C25.0052 1.55607 25.4312 1.971 25.6975 2.48172C26 3.06177 26 3.82149 26 5.33866V15.662C26 17.1792 26 17.9378 25.6975 18.5178C25.4312 19.0286 25.0052 19.4442 24.4825 19.7045C23.8889 20 23.1125 20 21.5598 20H5.44015C3.88749 20 3.11 20 2.51638 19.7045C1.99371 19.4442 1.56907 19.0286 1.30276 18.5178C1 17.9372 1 17.1776 1 15.6574Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        See Message
                    </Button>
                </div>
                      <div className="flex items-center justify-between mb-3 last:mb-0">
                    <div className="flex items-center gap-3 min-w-0">
                        <Avatar className="h-10 w-10 shrink-0">
                            <AvatarImage src="/static/images/Ellipse25.svg" alt="Profile" />
                            <AvatarFallback>PL</AvatarFallback>
                        </Avatar>
                        <p className="text-base truncate">Andy Johnson | Newnham Works Ltd.</p>
                    </div>
                    <Button 
                        className="bg-spaceCadet text-white text-white px-4 py-2 rounded-lg flex items-center gap-2 shrink-0"
                    >
                        <svg width="20" height="16" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.38889 2.35714L10.8717 8.61665L10.8745 8.61894C11.8165 9.29389 12.2877 9.63156 12.8038 9.76201C13.26 9.8773 13.7396 9.8773 14.1958 9.76201C14.7124 9.63144 15.185 9.29278 16.1286 8.61665C16.1286 8.61665 21.5696 4.53663 24.6111 2.35714M1 15.6574V5.34312C1 3.82298 1 3.06234 1.30276 2.48172C1.56907 1.971 1.99371 1.55607 2.51638 1.29584C3.11058 1 3.88901 1 5.44472 1H21.5558C23.1115 1 23.8883 1 24.4825 1.29584C25.0052 1.55607 25.4312 1.971 25.6975 2.48172C26 3.06177 26 3.82149 26 5.33866V15.662C26 17.1792 26 17.9378 25.6975 18.5178C25.4312 19.0286 25.0052 19.4442 24.4825 19.7045C23.8889 20 23.1125 20 21.5598 20H5.44015C3.88749 20 3.11 20 2.51638 19.7045C1.99371 19.4442 1.56907 19.0286 1.30276 18.5178C1 17.9372 1 17.1776 1 15.6574Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        See Message
                    </Button>
                </div>
                      <div className="flex items-center justify-between mb-3 last:mb-0">
                    <div className="flex items-center gap-3 min-w-0">
                        <Avatar className="h-10 w-10 shrink-0">
                            <AvatarImage src="/static/images/Ellipse25.svg" alt="Profile" />
                            <AvatarFallback>PL</AvatarFallback>
                        </Avatar>
                        <p className="text-base truncate">Greg Smith | Newnham Works Ltd.</p>
                    </div>
                    <Button 
                        className="bg-spaceCadet text-white text-white px-4 py-2 rounded-lg flex items-center gap-2 shrink-0"
                    >
                        <svg width="20" height="16" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.38889 2.35714L10.8717 8.61665L10.8745 8.61894C11.8165 9.29389 12.2877 9.63156 12.8038 9.76201C13.26 9.8773 13.7396 9.8773 14.1958 9.76201C14.7124 9.63144 15.185 9.29278 16.1286 8.61665C16.1286 8.61665 21.5696 4.53663 24.6111 2.35714M1 15.6574V5.34312C1 3.82298 1 3.06234 1.30276 2.48172C1.56907 1.971 1.99371 1.55607 2.51638 1.29584C3.11058 1 3.88901 1 5.44472 1H21.5558C23.1115 1 23.8883 1 24.4825 1.29584C25.0052 1.55607 25.4312 1.971 25.6975 2.48172C26 3.06177 26 3.82149 26 5.33866V15.662C26 17.1792 26 17.9378 25.6975 18.5178C25.4312 19.0286 25.0052 19.4442 24.4825 19.7045C23.8889 20 23.1125 20 21.5598 20H5.44015C3.88749 20 3.11 20 2.51638 19.7045C1.99371 19.4442 1.56907 19.0286 1.30276 18.5178C1 17.9372 1 17.1776 1 15.6574Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        See Message
                    </Button>
                </div>
                
        </div>
    );
}
