import React from 'react';

const Backend = () => {
    // List of skills
    const skills = [
        { name: "Firebase", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" },
        { name: "C# (.NET)", level: "Newbie" },
        { name: "Java", level: "Newbie" },
        { name: "Python", level: "Newbie" },

    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    {skills.map((skill, index) => (
                        <div className="skills__data" key={index}>
                            <i className="bx bx-badge-check"></i>
                            <div>
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Backend;