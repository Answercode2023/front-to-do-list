"use server";

import { getUserFromToken } from "@/lib/getUserFromToken";
import api from "@/services/api";
import axios from "axios";
import { cookies } from "next/headers";

export default async function NewTask(form: FormData) {
  const title = form.get("title") as string;
  const description = form.get("description") as string;
  const is_completed = (form.get("toggle") as string) == "yes";
  const category = form.get("taskType") as string;

  const data = {
    title: title,
    description: description,
    is_completed: is_completed,
    category:   parseInt(category),
  };
  console.log("==========================");
  console.log({ data });
  console.log("==========================");

  try {
    const token = (await cookies()).get("token")?.value;
    console.log("==========================");

    console.log("token--> " + token);
    console.log("==========================");

    const response = await api.post("/tasks/", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("--> " + response);
  } catch (error) {
    if (axios.isAxiosError(error)) {
    console.log("Erro ao criar a tarefa:", error);
    console.log("Resposta do backend:", error.response?.data);
  } else {
    console.error("Erro inesperado:", error);
  }
    return { success: false, error: "Erro ao criar a tarefa." };
  }
}
