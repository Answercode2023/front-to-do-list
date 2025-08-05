"use server";

import api from "@/services/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignInAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const data = {
    username: username,
    password: password,
  };

  console.log(data);

  try {
    const res = await api.post("/auth/login/", data);

    // Se a requisição foi bem-sucedida (status 2xx)
    const token = res.data.access; // Ou qualquer que seja o nome do campo do token

    if (!token) {
      return { success: false, error: "Token não recebido da API." };
    }

    // A MANEIRA CORRETA: Armazenar o token em um cookie HTTP-Only
    (await cookies()).set("token", token, {
      httpOnly: true, // O cookie não pode ser acessado por JavaScript no cliente (mais seguro)
      secure: process.env.NODE_ENV === "production", // Use 'secure' em produção (HTTPS)
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: "/", // O cookie está disponível para todo o site
    });

    console.log("Token recebido e cookie definido com sucesso!");
  } catch (err: any) {
    // Logar o erro detalhado do Axios para depuração
    console.error(
      "Falha na requisição para a API:",
      err.response?.data || err.message
    );

    // Retornar uma mensagem de erro genérica para o usuário
    return {
      success: false,
      error: "Email ou senha inválidos. Tente novamente.",
    };
  }

  // Se tudo deu certo, redireciona para o dashboard
//   redirect("/dashboard");
    return { success: true };
}



