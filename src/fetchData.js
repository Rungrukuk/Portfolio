import axios from 'axios';

const cacheDuration = 60 * 60 * 1000;

const getCachedData = (key) => {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    const { data, expiry } = JSON.parse(cached);
    if (expiry < Date.now()) {
        localStorage.removeItem(key);
        return null;
    }
    return data;
};

const setCachedData = (key, data) => {
    const expiry = Date.now() + cacheDuration;
    localStorage.setItem(key, JSON.stringify({ data, expiry }));
};

export const getLeetCodeStats = async (username) => {
    const cacheKey = `leetCodeStats_${username}`;
    const cachedData = getCachedData(cacheKey);
    if (cachedData) return cachedData;

    try {
        const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
        setCachedData(cacheKey, response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching LeetCode stats", error);
        throw error;
    }
};

export const getGitHubRepos = async (username) => {
    const cacheKey = `gitHubRepos_${username}`;
    const cachedData = getCachedData(cacheKey);
    if (cachedData) return cachedData;

    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setCachedData(cacheKey, response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub repos", error);
        throw error;
    }
};

export const getGitHubCommits = async (username, repo) => {
    const cacheKey = `gitHubCommits_${username}_${repo}`;
    const cachedData = getCachedData(cacheKey);
    if (cachedData) return cachedData;

    try {
        const response = await axios.get(`https://api.github.com/repos/${username}/${repo}/commits`);
        setCachedData(cacheKey, response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub commits", error);
        throw error;
    }
};

export const getAllGitHubCommits = async (username) => {
    try {
        const repos = await getGitHubRepos(username);
        const commitPromises = repos.map(repo => getGitHubCommits(username, repo.name));
        const commits = await Promise.all(commitPromises);
        return commits.flat().sort((a, b) => new Date(b.commit.author.date) - new Date(a.commit.author.date));
    } catch (error) {
        console.error("Error fetching all GitHub commits", error);
        throw error;
    }
};
