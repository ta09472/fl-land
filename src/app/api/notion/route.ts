// import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_SECRET ?? "",
});

export async function GET() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? "",
  });

  return NextResponse.json(response);
}
