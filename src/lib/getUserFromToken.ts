import { cookies } from "next/headers";

export async function getUserFromToken() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

//   console.log("Token no server:", token);

  return token;
}
