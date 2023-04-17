import React from 'react';
import '../assets/Project1.png';

export default function About() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div class="grid-container">
                <div class="grid-item">
                    <img src="../assets/Project1.png" alt="Project 1" width="500" height="600"/>
                </div>
                <div class="grid-item">
                    <img src="../assets/Project2.png" alt="Project 2" width="500" height="600"/>
                </div>
                <div class="grid-item">
                    <img src="../assets/Project3.png" alt="Project 3" width="500" height="600"/>
                </div>
                <div class="grid-item">
                    <img src="../assets/Project4.png" alt="Project 4" width="500" height="600"/>
                </div>
                
            </div>
        </div>
    );
}
