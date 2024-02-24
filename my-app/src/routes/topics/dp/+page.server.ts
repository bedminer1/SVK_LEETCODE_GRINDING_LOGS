import PocketBase from "pocketbase";
import { SECRET_PASSWORD, SECRET_EMAIL, SECRET_URL } from "$env/static/private";

export const actions = {
  create: async ({ request }) => {
    const pb = new PocketBase(SECRET_URL);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

    const form = await request.formData();
    const question = form.get("question") ?? "";
    const link = form.get("link") ?? "";
    const code = form.get("code") ?? "";
    const favorite = false;

    const newRecord = {
      question,
      link,
      code,
      favorite,
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

export const load = async ({ fetch }) => {
  const pb = new PocketBase(SECRET_URL);
  await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
  const records = await pb.collection("snippets").getFullList(200, {
    sort: "-created",
  });

  const results = records.map((record) => {
    return {
      question: record.question,
      link: record.link,
      code: record.code,
      favorite: record.favorite,
      id: record.id,
    };
  });

  return {
    records: results,
  };
};
