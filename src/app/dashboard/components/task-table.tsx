// components/task-table.tsx
"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Task } from "../types";
import { columns } from "./task-columns";
import { DatePicker } from "./date-picker";
import { toast } from "sonner";
import { HoverCardDemo } from "./HoverCard";

// Mock de dados para simular a resposta da sua API
const mockData: Task[] = [
  {
    id: 1,
    title: "Estudar Django (Atualizado)",
    description: "Focar muito no DRF",
    is_completed: true,
    created_at: "2025-08-04T23:49:42.066494Z",
    user: 1,
    category: null,
  },
  {
    id: 2,
    title: "Estudar Java",
    description: "Focar no POO",
    is_completed: false,
    created_at: "2025-08-05T19:02:53.542047Z",
    user: 1,
    category: null,
  },
];

export function TaskTable() {
  const [data, setData] = React.useState<Task[]>(mockData);
  const [dateInicial, setDateInicial] = React.useState<Date>();
  const [dateFinal, setDateFinal] = React.useState<Date>();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleFilter = () => {
    toast(
      <>
        <strong>Filtro Aplicado!</strong>
        <div>
          {`Filtrando tarefas de ${dateInicial?.toLocaleDateString(
            "pt-BR"
          )} a ${dateFinal?.toLocaleDateString("pt-BR")}.`}
        </div>
      </>
    );
  };

  const handleCreateTask = () => {
    toast(
      <>
        <strong>Tarefa Criada!</strong>
        <div>Sua nova tarefa foi adicionada com sucesso.</div>
      </>
    );
  };

  // MUDANÇA PRINCIPAL: Envelopamos tudo em um componente Card
  return (
    <Card className="ml-4 mr-4 mt-4 mb-4 hover:shadow-2xl">
      <CardHeader>
        {/* Usamos Flexbox para alinhar o título e o botão */}
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Minhas Tarefas</CardTitle>
            <CardDescription>
              Visualize e gerencie suas tarefas aqui.
            </CardDescription>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Nova Tarefa</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Criar Nova Tarefa</AlertDialogTitle>
                <AlertDialogDescription>
                  Preencha as informações abaixo para adicionar uma nova tarefa
                  à sua lista.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Título
                  </Label>
                  <Input
                    id="title"
                    placeholder="Ex: Fazer compras"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Descrição
                  </Label>
                  <Input
                    id="description"
                    placeholder="Ex: Comprar leite e pão"
                    className="col-span-3"
                  />
                </div>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={handleCreateTask}>
                  Salvar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* O Accordion de filtro agora fica aqui dentro */}
          <Accordion type="single" collapsible className="w-full border-b">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span>
                  <HoverCardDemo />
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                {/* Usamos Flexbox para alinhar os seletores de data e o botão */}
                <div className="flex items-center gap-2">
                  <DatePicker
                    date={dateInicial}
                    setDate={setDateInicial}
                    label="Data Inicial"
                  />
                  <DatePicker
                    date={dateFinal}
                    setDate={setDateFinal}
                    label="Data Final"
                  />
                  <Button
                    onClick={handleFilter}
                    disabled={!dateInicial || !dateFinal}
                  >
                    Aplicar Filtro
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* A Tabela continua igual, mas agora dentro do CardContent */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      Nenhuma tarefa encontrada.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
