import PocketBase from "pocketbase";
import { SECRET_PASSWORD, SECRET_EMAIL, SECRET_URL } from "$env/static/private";

export const load = async ({ fetch }) => {
    const pb = new PocketBase(SECRET_URL);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
    const records = await pb.collection("snippets").getFullList(200, {
      sort: "-created",
    });
  
    const results : CodeSnippet[] = records.map((record) => {
      return {
        question: record.question,
        link: record.link,
        code: record.code,
        topic: record.topic,
        id: record.id,
      };
    });
  
    return {
      records: results,
    };
  };