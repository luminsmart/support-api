import { Client } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}
async function close() {
  await client.close();
}

export async function fetchBanners() {
  await connect();
  const banners = await client.execute(["JSON.GET", "banners"]);
  await close();
  return JSON.parse(banners as string);
}

export async function fetchDialogs() {
  await connect();
  const dialogs = await client.execute(["JSON.GET", "dialogs"]);
  await close();
  return JSON.parse(dialogs as string);
}

export async function fetchSupportHours() {
  await connect();
  const supportHours = await client.execute(["JSON.GET", "support-hours"]);
  await close();
  return JSON.parse(supportHours as string);
}
