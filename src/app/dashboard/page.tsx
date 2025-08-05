// app/dashboard/page.tsx

import { Toaster } from "@/components/ui/sonner";
import { TaskTable } from "./components/task-table";


export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <header className="mb-8 ml-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard de Tarefas</h1>
        <p className="text-muted-foreground">Gerencie suas tarefas de forma simples e moderna.</p>
      </header>
      <main>
        <TaskTable />
      </main>
      <Toaster />
    </div>
  );
}