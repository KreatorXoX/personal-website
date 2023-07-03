import { type SchemaTypeDefinition } from "sanity";
import pageInfo from "./pageInfo";
import skill from "./skill";
import project from "./project";
import social from "./social";
import typewriter from "./typewriter";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, skill, project, social, typewriter],
};
