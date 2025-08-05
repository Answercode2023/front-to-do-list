'use client'

import { Button } from "@/components/ui/button";

export default function WelcomeScreen() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo em background.
      </video>

      {/* Overlay escura para melhorar o contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Conteúdo principal */}
      <div className="relative z-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Bem-vindo ao seu ToDo List
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Organize suas tarefas de forma simples e moderna.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button
            className="px-8 py-4 text-lg"
            variant="default"
            onClick={() => window.location.href = "/signin"}
          >
            Sign In
          </Button>
          <Button
            className="px-8 py-4 text-lg"
            variant="outline"
            onClick={() => window.location.href = "/signup"}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
