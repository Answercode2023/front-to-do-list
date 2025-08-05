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

export function AlertDialogForm() {
  const handleCreateTask = () => {
    toast(
      <>
        <strong>Tarefa Criada!</strong>
        <div>Sua nova tarefa foi adicionada com sucesso.</div>
      </>
    );
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Nova Tarefa</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Criar Nova Tarefa</AlertDialogTitle>
          <AlertDialogDescription>
            Preencha as informações abaixo para adicionar uma nova tarefa à sua
            lista.
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

          <CheckboxDemo/>

          <SelectActive />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleCreateTask}>
            Salvar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
