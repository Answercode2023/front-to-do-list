'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";
// import router from "next/router";
import { toast } from "sonner";
import SignInAction from "./_action/signin-action";
import { useState } from "react";
import router from "next/router";
import { redirect } from "next/navigation";


export default function SignInPage() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (formData: FormData) => {

   
     const res = await SignInAction(formData);

    if (!res.success) {
      toast.custom(() => (
        <div className="p-4 bg-red-600 text-white rounded-xl shadow-lg border border-red-700">
          <strong className="block font-bold">ERRO AO ACESSAR</strong>
          <span className="text-sm">{res.error}.</span>
        </div>
      ));
    }
    if (res.success) {
      toast.custom(() => (
        <div className="p-4 bg-green-500 text-white rounded-xl shadow-lg border border-green-600">
          <strong className="block font-bold">Sucesso!</strong>
          <span className="text-sm">Login realizado. Redirecionando...</span>
        </div>
      ));
      // router.push("/dashboard");
      redirect("/dashboard");
    }
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Entrar na sua conta
        </h2>
        <form action={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="username" className="text-gray-700 dark:text-gray-300 mb-2">
              User Name
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 " />
              <Input
                value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="username"
              name="username"
              placeholder="Dev junior"
              required
              autoComplete="username"
              className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 mb-2">
              Senha
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                  type="password"
                  placeholder="••••••••"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Não tem uma conta?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
