// src/lib/github/issueApi.ts
import { createGitHubClient } from './client'

const owner = 'YOUR_GITHUB_USERNAME'
const repo = 'YOUR_REPO_NAME'

export const listIssues = async () => {
  const octokit = createGitHubClient()
  const { data } = await octokit.issues.listForRepo({ owner, repo })
  return data
}

export const createIssue = async (title: string, body: string) => {
  const octokit = createGitHubClient()
  const { data } = await octokit.issues.create({ owner, repo, title, body })
  return data
}
