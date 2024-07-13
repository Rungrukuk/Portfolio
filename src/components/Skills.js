import React, { useEffect, useState } from 'react';
import '../style/Skills.css';
import { Row, Col } from "react-bootstrap";
import { FaPython, FaJava, FaPhp, FaHtml5, FaCss3, FaJsSquare, FaDocker, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiMysql, SiSqlite, SiMongodb, SiPostman, SiJupyter, SiUnity, SiUnrealengine, SiPandas, SiCsharp } from 'react-icons/si';
import { getLeetCodeStats, getAllGitHubCommits } from '../fetchData';

const Skills = React.forwardRef((props, ref) => {
    const [loading, setLoading] = useState(true);
    const [leetcodeStats, setLeetCodeStats] = useState({});
    const [githubCommits, setGitHubCommits] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const leetCodeUsername = process.env.REACT_APP_LEETCODE_USERNAME;
                const gitHubUsername = process.env.REACT_APP_GITHUB_USERNAME;

                const [leetCodeData, gitHubData] = await Promise.allSettled([
                    getLeetCodeStats(leetCodeUsername),
                    getAllGitHubCommits(gitHubUsername)
                ]);

                if (leetCodeData.status === "fulfilled") {
                    setLeetCodeStats(leetCodeData.value);
                } else {
                    console.error("Error fetching LeetCode stats", leetCodeData.reason);
                }

                if (gitHubData.status === "fulfilled") {
                    setGitHubCommits(gitHubData.value);
                } else {
                    console.error("Error fetching GitHub commits", gitHubData.reason);
                }
            } catch (error) {
                setError("Error fetching data");
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const convertUnixToDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
        return date.toLocaleDateString(); // Convert to readable date string
    };

    const latestSubmissions = Object.keys(leetcodeStats.submissionCalendar || {})
        .map(timestamp => ({
            date: convertUnixToDate(timestamp),
            submissions: leetcodeStats.submissionCalendar[timestamp]
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    return (
        <div className="section skills" ref={ref} data-section={props['data-section']}>
            {loading && (
                <div className="spinner-overlay">
                    <div className="spinner"></div>
                </div>
            )}
            {error && (
                <div className="error-message">
                    <p>{error}</p>
                </div>
            )}
            <div className='position-relative'>
                <h2 className='pl-4 text-19 opacity-4 text-uppercase fw-600 w-100 mb-0'>Skills</h2>
            </div>
            <Row>
                <Col md={12}>
                    <div className='p-4 text-5 text-white-50'>
                        <div className="skills-item">
                            <h4 className='text-light-green'>Programming Languages:</h4>
                            <div className='skill-icons'>
                                <FaPython size={30} className='mr-3' />
                                <FaJava size={30} className='mr-3' />
                                <SiCsharp size={30} className='mr-3' />
                                <FaPhp size={30} className='mr-3' />
                                <FaJsSquare size={30} className='mr-3' />
                                <FaHtml5 size={30} className='mr-3' />
                                <FaCss3 size={30} className='mr-3' />
                            </div>
                            <p>Python, Java, C#, PHP, JavaScript, HTML, CSS</p>
                        </div>
                        <div className="divider"></div>
                        <div className="skills-item">
                            <h4 className='text-light-green'>Developer Tools:</h4>
                            <div className='skill-icons'>
                                <SiDjango size={30} className='mr-3' />
                                <SiMysql size={30} className='mr-3' />
                                <SiSqlite size={30} className='mr-3' />
                                <SiMongodb size={30} className='mr-3' />
                                <FaGitAlt size={30} className='mr-3' />
                                <FaDocker size={30} className='mr-3' />
                                <FaLinux size={30} className='mr-3' />
                                <SiPostman size={30} className='mr-3' />
                                <SiJupyter size={30} className='mr-3' />
                                <SiUnity size={30} className='mr-3' />
                                <SiUnrealengine size={30} className='mr-3' />
                                <SiPandas size={30} className='mr-3' />
                            </div>
                            <p>Spring, Django, MySQL, SQL Lite, MongoDB, Git, Docker, Linux, Postman, Jupyter, Unity, Unreal Engine, Pandas</p>
                        </div>
                        <div className="divider"></div>
                        <div className="skills-item skills-row">
                            <div className="skills-col">
                                <h4 className='text-light-green'>LeetCode Statistics:</h4>
                                <Row noGutters>
                                    <Col xs={6}>
                                        <p>Easy: {leetcodeStats.easySolved}</p>
                                        <p>Medium: {leetcodeStats.mediumSolved}</p>
                                        <p>Hard: {leetcodeStats.hardSolved}</p>
                                    </Col>
                                    <Col xs={6}>
                                        {latestSubmissions.map((submission, index) => (
                                            <p key={index}>{submission.submissions} submissions on {submission.date}</p>
                                        ))}
                                    </Col>
                                </Row>
                            </div>
                            <div className="skills-col">
                                <h4 className='text-light-green'>Latest GitHub Commits:</h4>
                                {githubCommits.slice(0, 3).map((commit, index) => (
                                    <p key={index}>{commit.commit.message} - {new Date(commit.commit.author.date).toLocaleDateString()}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
});

export default Skills;
