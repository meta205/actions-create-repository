import * as core from '@actions/core';
import { Octokit } from '@octokit/rest';

(async (): Promise<void> => {
  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const name: string = core.getInput('name');

    await octokit.rest.repos.createForAuthenticatedUser({
      name: name,
    });
  } catch (err: any) {
    core.setFailed(err.message);
  }
})();
