import type { Context } from "netlify:edge"

export default async (request: Request, context: Context) => Response.redirect("https://icanhazdadjoke.com/", 302)
