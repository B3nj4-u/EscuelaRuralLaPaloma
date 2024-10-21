// app/api/calendario/route.ts
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
  const GOOGLE_SHEETS_CREDENTIALS_PATH = process.env.GOOGLE_SHEETS_CREDENTIALS_PATH;

  if (!SPREADSHEET_ID || !GOOGLE_SHEETS_CREDENTIALS_PATH) {
    return NextResponse.json({ error: "Faltan variables de entorno" }, { status: 500 });
  }

  let credentials;
  try {
    credentials = JSON.parse(GOOGLE_SHEETS_CREDENTIALS_PATH);
    if (credentials.private_key) {
      credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');
    }
  } catch (error) {
    console.error("Error al parsear las credenciales:", error);
    return NextResponse.json({ error: "Error al parsear las credenciales" }, { status: 500 });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Hoja1!A:C",
    });

    const rows = response?.data?.values || [];
    const eventos = rows.slice(1).map((row) => ({
      fecha: row[0],
      actividad: row[1],
      detalle: row[2],
    }));

    return NextResponse.json(eventos);
  } catch (error) {
    console.error("Error al obtener eventos:", error);
    return NextResponse.json({ error: "Error al obtener eventos" }, { status: 500 });
  }
}
