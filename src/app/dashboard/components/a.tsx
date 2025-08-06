import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  const [isChecked, setIsChecked] = React.useState(true) // padrão: marcado

  return (
    <div className="flex flex-col gap-6">
      <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <Checkbox
          id="toggle-2"
          name="toggle"
          value={"yes"}
          checked={isChecked}
          onCheckedChange={(checked) => setIsChecked(!!checked)}
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Tarefa Concluída
          </p>
          <p className="text-muted-foreground text-sm">
            Marque essa opção para marcar a tarefa como concluída a qualquer momento.
          </p>
        </div>
      </Label>

      {/* Mostra o estado atual */}
      <p className="text-sm text-muted-foreground">
        Estado atual: {isChecked ? "true (concluída)" : "false (pendente)"}
      </p>
    </div>
  )
}
