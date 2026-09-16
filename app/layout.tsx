import "./globals.css"; import {Header} from "@/components/Header"; import {Footer} from "@/components/Footer";
export const metadata={title:"Tottaly — Compare Before You Buy",description:"Compare prices across stores in one place."};
export default function RootLayout({children}:{children:React.ReactNode}){return <><Header/>{children}<Footer/></>}