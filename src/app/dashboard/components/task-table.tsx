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
import { AlertDialogForm } from "./AlertDialogForm";
import { getTasksByDate } from "../action/task-table-action";


export function TaskTable() {
  const [data, setData] = React.useState<Task[]>([]);
  const [dateInicial, setDateInicial] = React.useState<Date>();
  const [dateFinal, setDateFinal] = React.useState<Date>();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleFilter = async () => {
    if (!dateInicial || !dateFinal) return;

    const isoInicial = dateInicial.toISOString();
    const isoFinal = dateFinal.toISOString();

    console.log("Buscando tarefas de", isoInicial, "até", isoFinal);

    const response = await getTasksByDate({
      data_inicial: isoInicial,
      data_final: isoFinal,
    });

    if (response) {
      console.log("Resposta recebida no front:", response);
      setData(response);
      toast(
        <>
          <strong>Filtro Aplicado!</strong>
          <div>
            Tarefas de {dateInicial.toLocaleDateString("pt-BR")} até{" "}
            {dateFinal.toLocaleDateString("pt-BR")}
          </div>
        </>
      );
    } else {
      toast.error("Erro ao buscar tarefas.");
    }
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

          <AlertDialogForm />
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
