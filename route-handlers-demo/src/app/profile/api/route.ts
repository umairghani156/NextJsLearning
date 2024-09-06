import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();
    cookies().set("getResultPage","2");
    const theme = request.cookies.get("theme");
    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));
    console.log(theme);
    console.log(cookies().get("getResultPage"));
    
    return new Response("<h1>API Profile</h1>",{
        headers:{
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}