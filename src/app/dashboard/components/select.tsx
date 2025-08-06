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
  const [selectedTaskType, setSelectedTaskType] = React.useState("")
  return (
    <Select name="taskType" value={selectedTaskType}
        onValueChange={(value) => setSelectedTaskType(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select your Task" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem  value="2">Tarefa diária</SelectItem>
          <SelectItem value="1">Tarefa semanal</SelectItem>
          <SelectItem value="3">Tarefa mensal</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
