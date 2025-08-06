'use server'

import api from "@/services/api";
import { cookies } from "next/headers";
import { Task } from "../types";

interface Params {
  data_inicial: string;
  data_final: string;
}

export async function getTasksByDate({
  data_inicial,
  data_final,
}: Params): Promise<Task[] | null> {
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    console.error("Token não encontrado");
    return null;
  }

  try {
    const dataInicial = new Date(data_inicial);
    dataInicial.setHours(0, 0, 0, 0);
    const dataInicialISO = dataInicial.toISOString();

    const dataFinal = new Date(data_final);
    dataFinal.setHours(23, 59, 59, 999);
    const dataFinalISO = dataFinal.toISOString();

    console.log("🔍 URL gerada:");
    console.log(api.getUri({
      url: "/tasks-filtrar/",
      params: {
        data_inicial: dataInicialISO,
        data_final: dataFinalISO,
      },
    }));

    const response = await api.get("/tasks-filtrar/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        data_inicial: dataInicialISO,
        data_final: dataFinalISO,
      },
    });

    console.log("✅ Resposta da API:", response.data);
    return response.data as Task[];

  } catch (error: any) {
    console.error("❌ Erro ao buscar tarefas:", error?.response?.data || error.message);
    return null;
  }
}
