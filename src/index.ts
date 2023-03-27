import * as core from '@actions/core';
import { Octokit } from '@octokit/rest';

(async (): Promise<void> => {
  try {
    const repoName: string = core.getInput('repo-name');
    const repoPrivate: boolean = core.getInput('repo-private') === 'true';

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    await octokit.rest.repos.createForAuthenticatedUser({
      name: repoName,
      description: `${repoName} Repo`,
      private: repoPrivate,
      auto_init: true
    });
  } catch (err: any) {
    core.setFailed(err.message);
  }
})();
