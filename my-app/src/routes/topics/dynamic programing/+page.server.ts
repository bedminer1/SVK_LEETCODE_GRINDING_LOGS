import PocketBase from "pocketbase";
import { SECRET_PASSWORD, SECRET_EMAIL, SECRET_URL } from "$env/static/private";

export const actions = {
  create: async ({ request }) => {
    const pb = new PocketBase(SECRET_URL);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    const form = await request.formData();
    const question = form.get("question") as string ?? "";
    const link = form.get("link") as string ?? "";
    const code = form.get("code") as string ?? "";
    const topic = form.get("topic") as string ?? ""

    const newRecord : CodeSnippetInput = {
      question,
      link,
      code,
      topic,
    };

    const record = await pb.collection("snippets").create(newRecord);
  },

  delete: async ({ request }) => {
    const pb = new PocketBase(SECRET_URL);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    const form = await request.formData();
    const id = (form.get("id") as string) ?? "";

    await pb.collection("snippets").delete(id);
  },
};

