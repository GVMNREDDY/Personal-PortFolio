import React from "react";

const Porjects = () => {
    return (
        <>
            <div class="Pcontainer1">
                <div class="Pparent1">
                    <div class="Pchild1">
                        <h1 style={{color:"red"}}>Project 1</h1>
                        <h1>SENTIMENTAL ANALYSIS UPON TOURISM REVIEWS</h1>
                        <div className="ptag">Our project aims to analyze the sentiment of tourists upon their reviews of various places.</div><br />
                        <div>This project involves performing sentiment analysis on tourism reviews using Python. Reviews are collected
                            from platforms like TripAdvisor, then cleaned and preprocessed by removing stopwords, tokenizing, and lemmatizing
                            the text. Sentiment analysis is conducted using libraries like TextBlob and VADER, which assign sentiment scores
                            to the reviews, indicating whether they are positive, negative, or neutral. For more advanced insights, machine
                            learning models like Naive Bayes or deep learning models like BERT can be applied. Finally, visualizations like
                            word clouds and sentiment distributions help interpret the results, providing actionable insights for tourism
                            businesses.
                        </div>
                        <div className="div_Img"><img src="/Insights3.png" alt="no signal" width="200rem" /><img src="/img5.jpg" alt="no signal" width="200rem" /><br />
                        <img src="/img2.jpeg" alt="no signal" width="200rem" /><img src="/img6.jpeg" alt="no signal" width="200rem" /></div>
                    </div>
                    <div class="Pchild2">
                        <h1 style={{color:"skyblue"}}>Project 2</h1>
                        <h1>Diet planner</h1>
                        <div className="ptag">"Comprehensive Guide to Diet Planning: A Structured Approach to Healthy Eating"</div><br />
                        <div>A diet planner is a structured tool designed to help individuals organize their meals and maintain a balanced,
                            nutritious diet. It enables users to schedule meals, track calorie intake, and monitor macronutrients such as
                            proteins, carbohydrates, and fats. Many diet planners offer customizable meal plans tailored to specific health
                            goals, whether it’s weight loss, muscle gain, or general wellness. They also integrate grocery list creation,
                            water intake tracking, and fitness synchronization to ensure a holistic approach to health. Additionally,
                            they accommodate various dietary preferences, such as vegetarian, vegan, keto, or gluten-free options.
                            Using a diet planner promotes better nutrition, saves time and money by streamlining meal preparation, and supports
                            long-term health benefits by reducing the risk of lifestyle-related diseases. Whether in the form of a mobile app,
                            website, or physical journal, a diet planner is an essential tool for anyone looking to improve their eating habits
                            and overall well-being.
                            <div className="div_Img"><img src="/img1on1.jpeg" alt="no signal" width="200rem" /><img src="/img3on3.jpeg" alt="no signal" width="200rem" /><br />
                            <img src="/img2on2.jpeg" alt="no signal" width="200rem" /></div>
                        </div>
                    </div>
                </div>
                {/* Projects here .................... */}
            </div>
        </>
    )
}
export default Porjects;