import { personalInfo } from "@/data/personal";
import { NextResponse } from "next/server";

export async function GET() {
    const pdfUrl = personalInfo.cvUrl;
    const res = await fetch(pdfUrl,{
        next: { revalidate: 3600 }
    });

    if (!res.ok) {
        return new NextResponse("Cannot download file", { status: 500 });
    }

    const buffer = await res.arrayBuffer();
    return new NextResponse(buffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="Resume-Gregory-Cabral.pdf"`,
            "Content-Length": buffer.byteLength.toString(),
        },
    });
}