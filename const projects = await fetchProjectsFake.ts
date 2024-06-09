const projects = await fetchProjectsFake();

const fetchProjectsFake = async () => {
  const PROJECT: ProjectContainer = {
    Main: [],
    Secondary: [],
  };

  const request = await fs.readFile(".idea/httpRequests/projects.json");

  const projects = JSON.parse(request.toString()) as Array<Project>;
  const icones = await randomIcones(projects.length);

  projects
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .forEach((project, index) => {
      project.icon = icones[index].path;

      if (project.topics.includes("main")) {
        PROJECT.Main.push(project);
      } else {
        PROJECT.Secondary.push(project);
      }
    });

  return PROJECT;
};
