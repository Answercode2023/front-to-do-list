import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger >
        Filtros Avançados
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Opções de Filtro</h4>
          <p className="text-sm">
            Utilize os campos abaixo para refinar a sua busca por tarefas:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground">
            <li>Filtrar por data de criação</li>
            <li>Buscar entre datas específicas</li>
            <li>Visualizar tarefas concluídas ou pendentes.</li>
            <li>Organizar por categoria (em breve)</li>
          </ul>
          <div className="text-xs text-muted-foreground mt-2">
            Dica: selecione uma data inicial e final para listar tarefas dentro do período.
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
