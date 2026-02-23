export interface ToolDefinition {
  name: string;
  experienceRate: number;
}

export interface ToolsSetDefinition {
  title: string;
  tools: ToolDefinition[];
}
