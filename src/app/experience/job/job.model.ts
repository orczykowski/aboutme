import {
  ApplicationArchitecture,
  Methodology,
  SystemArchitecture,
  Technology
} from "../../utils/technologies/definition.model";

export interface JobInfo {
  companyName: string,
  position: string,
  begin: Date,
  end?: Date,
  description?: string,
  mainTechnologies: Technology[],
  otherTechnologies?: Technology[],
  mainResponsibilities: string[],
  additionalResponsibilities?: string[],
  methodologies: Methodology[]
  applicationArchitectures: ApplicationArchitecture[],
  systemArchitecture?: SystemArchitecture,
}

