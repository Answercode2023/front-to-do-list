
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";


export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Entrar na sua conta
        </h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                id="email"
                placeholder="seu@email.com"
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
              Senha
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                id="password"
                placeholder="••••••••"
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
