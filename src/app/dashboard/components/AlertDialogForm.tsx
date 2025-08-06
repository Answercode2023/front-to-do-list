"use client";
import * as React from "react";
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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { toast } from "sonner";
import { SelectActive } from "./select";
import { CheckboxDemo } from "./a";
import { useState } from "react";
import NewTask from "../action/new-task-action";

export function AlertDialogForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTask = async (formData: FormData) => {
    console.log(formData.get("taskType"));

    const response = await NewTask(formData);

    // toast(
    //   <>
    //     <strong>Tarefa Criada!</strong>
    //     <div>Sua nova tarefa foi adicionada com sucesso.</div>
    //   </>
    // );
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Nova Tarefa</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Criar Nova Tarefa</AlertDialogTitle>
            <AlertDialogDescription>
              Preencha as informações abaixo para adicionar uma nova tarefa à
              sua lista.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <form action={handleCreateTask}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Título
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Comprar leite"
                  className="col-span-3"
                  type="title"
                  name="title"
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Descrição
                </Label>
                <Input
                  id="description"
                  placeholder="Ex: Comprar leite e pão"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="col-span-3"
                  type="description"
                  name="description"
                  required
                />
              </div>

              <CheckboxDemo />

              <SelectActive />
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction type="submit">Salvar</AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
