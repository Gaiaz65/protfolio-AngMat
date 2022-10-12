export default interface Project {
  img: string;
  images:string[];
  title: string;
  subtitle: string;
  gitLink?: string;
  projectLink?:string;
  description:string,
  technologies:string[];
  tasks: string[]
}
