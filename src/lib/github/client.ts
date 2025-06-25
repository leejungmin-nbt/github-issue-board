// src/lib/github/client.ts
import { Octokit } from '@octokit/rest'

export const createGitHubClient = () => {
  return new Octokit({ auth: process.env.GITHUB_TOKEN })
}
