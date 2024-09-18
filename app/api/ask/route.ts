import { ask } from "@/actions/ask";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const query = body.query;
    if (!query) {
      return new Response("No Query Provided", { status: 400 });
    }
    const res = await ask(query);
    const { response, success } = res;
    if (!success) {
      return new Response("Not sent", { status: 500 });
    }
    return new Response(response, {
      status: 200,
    });
  } catch (e) {
    return new Response("Not sent", { status: 500 });
  }
}
