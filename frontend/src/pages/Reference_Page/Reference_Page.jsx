import React from 'react';
import './Reference_Page.css';

const ReferencePage = () => {
    return (
        <div>
            <body>
                <div className="content">
                    <h1>Sources</h1>

                    <h2>Images and Information</h2>
                    <ul className="source-list">
                        <li>
                            <a
                                href="https://pixabay.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://pixabay.com/
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://icons8.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://icons8.com/
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://pexels.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://pexels.com/
                            </a>
                        </li>
                    </ul>

                    <h2>Plan of Work</h2>
                    <ul className="source-list">
                        <li>
                            <img src="https://placehold.co/400x600/png" alt="Work Log" />
                        </li>
                    </ul>

                    <h2>Copyright Checklist</h2>
                    <ul className="source-list">
                        <li>
                            <img src="https://placehold.co/400x600/png" alt="Copyright" style={{ maxWidth: '500px' }} />
                        </li>
                    </ul>
                </div>
            </body>
        </div>
    );
};

export default ReferencePage;