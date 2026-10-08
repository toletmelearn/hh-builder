import { getGithubUser } from "../handlers/github_handlers";

export async function getGitAuthor() {
  const user = await getGithubUser();
  const author = user
    ? {
        name: "hh-builder",
        email: user.email,
      }
    : {
        name: "hh-builder",
        email: "git@hh-builder.local",
      };
  return author;
}
