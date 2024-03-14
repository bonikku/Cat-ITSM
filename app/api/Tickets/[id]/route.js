// route.js filename is important here too
import Ticket from "@/app/models/Ticket"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
  try {
    const { id } = params

    const foundTicket = await Ticket.findOne({ _id: id })

    return NextResponse.json({ foundTicket }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params
    await Ticket.findByIdAndDelete(id)

    return NextResponse.json({ message: "Ticket has been deleted" }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 })
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params
    const body = await req.json()
    const ticketData = body.formData

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    })

    return NextResponse.json({ message: "Ticket has been updated" }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 })
  }
}
