// import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_SECRET ?? "",
});

export async function GET() {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID ?? "",
  });

  console.log(response);

  return NextResponse.json(response);
}
