import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({message:"logout in progress"})
    response.cookies.set("token","",{
        httpOnly:true,
        expires: new Date(0)
    })
    return response
   
  } catch (error:any) {
    console.log("error in logouting from the backend",error);
    return NextResponse.json(error);
  }
}