import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "faurabtj",
  dataset: "production",
  apiVersion: "2024-03-01",
  useCdn: false,
});

async function check() {
  try {
    const docs = await client.fetch('*[_type in ["project", "category"]]');
    console.log("Found published documents:", docs.length);
    console.log(JSON.stringify(docs, null, 2));
  } catch (err) {
    console.error("Error fetching docs:", err);
  }
}

check();
