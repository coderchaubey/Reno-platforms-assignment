import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { put } from "@vercel/blob";

// API for adding the schools
export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact = formData.get("contact");
    const email_id = formData.get("email_id");
    const file = formData.get("image");
    let imagePath = null;

    if (file && file.size > 0) {
      const fileName = `${Date.now()}-${file.name || "unknown"}`;

      if (process.env.NODE_ENV === "development") {
        const buffer = Buffer.from(await file.arrayBuffer());
        const dir = path.join(process.cwd(), "public/schoolImages");
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); //Create path if not exists

        const filePath = path.join(dir, fileName);
        fs.writeFileSync(filePath, buffer);
        imagePath = `/schoolImages/${fileName}`;
        
      } else { //For deployment cases using vercel blob
        const blob = await put(`schoolImages/${fileName}`, file, {
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN,
        })

        imagePath = blob.url;
      }
    }

    const db = await connectToDatabase(); //Get the connection var

    await db.execute(
      //Persist to DB
      "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, imagePath, email_id]
    );

    return NextResponse.json(
      { message: "School added successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// API for showing the schools
export async function GET() {
  try {
    const db = await connectToDatabase(); //Get the connection var

    const [rows] = await db.execute(
      //Get the data from db
      "SELECT id, name, address, city, image from schools"
    );
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
