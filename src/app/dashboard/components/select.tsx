import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectActive() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select your Task" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="Tarefas diárias">Tarefa diária</SelectItem>
          <SelectItem value="Tarefas semanais">Tarefa semanal</SelectItem>
          <SelectItem value="Tarefas mensais">Tarefa mensal</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
