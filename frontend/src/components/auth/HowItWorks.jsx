import React from "react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <>
      <div className="hiw-page">
        <div className="hiw-container">
          <Link to="/login-success" className="hiw-back-link">
            Back to Dashboard
          </Link>

          <h1>The Intelligence Behind the Art</h1>

          <p className="hiw-intro">
            This platform transforms human voice into expressive digital art using a 
            multi-stage AI pipeline. By combining signal processing, emotion AI, and 
            generative models, we convert speech into visually meaningful creations 
            that reflect both content and emotion.
          </p>

          {/* STEP 1 */}
          <div className="hiw-step">
            <h3>1. Voice Signal Processing</h3>
            <p>
              The process begins with capturing your voice input and converting it 
              into a high-quality WAV format. Advanced audio signal processing techniques 
              extract key features such as pitch, tone, frequency, tempo, and energy levels.
              These features help us understand not just what you say, but how you say it.
            </p>
            <p>
              This stage ensures that emotional nuances like excitement, calmness, or stress 
              are preserved and quantified for further analysis.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="hiw-step">
            <h3>2. Emotion & Context Understanding</h3>
            <p>
              The extracted audio features are passed into a fine-tuned deep learning model 
              based on transformer architecture. This model analyzes both the vocal patterns 
              and speech content to classify emotions such as happiness, sadness, anger, or neutrality.
            </p>
            <p>
              Each prediction is accompanied by confidence scores, enabling the system to 
              intelligently balance multiple emotional signals when generating the final output.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="hiw-step">
            <h3>3. AI-Powered Image Generation</h3>
            <p>
              The detected emotion, combined with the transcribed text, is converted into 
              a structured prompt. This prompt is fed into a latent diffusion model, which 
              generates high-quality images from noise through iterative refinement.
            </p>
            <p>
              The selected art style acts as a guiding parameter, ensuring the final image 
              aligns with your aesthetic preference while still representing your emotional state.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="hiw-step">
            <h3>4. Personalized Artistic Output</h3>
            <p>
              The final result is a unique piece of AI-generated artwork that reflects your 
              voice, emotion, and intent. Each output is different, making every interaction 
              a personalized creative experience.
            </p>
            <p>
              This approach bridges the gap between human expression and machine creativity, 
              turning speech into a new form of digital storytelling.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .hiw-page {
          font-family: Inter, Arial, sans-serif;
          background: #0f111a;
          color: #e0e0e0;
          min-height: 100vh;
          padding: 50px 24px;
          line-height: 1.6;
        }

        .hiw-container {
          max-width: 860px;
          margin: 0 auto;
        }

        .hiw-back-link {
          color: #7c4dff;
          text-decoration: none;
          font-size: 0.95rem;
          margin-bottom: 20px;
          display: inline-block;
          font-weight: 600;
        }

        .hiw-container h1 {
          font-family: Poppins, Arial, sans-serif;
          font-size: 2.5rem;
          margin-bottom: 26px;
          background: linear-gradient(to right, #00e5ff, #7c4dff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hiw-intro {
          margin-bottom: 20px;
          color: #b4b9c8;
        }

        .hiw-step {
          background: rgba(255, 255, 255, 0.05);
          padding: 25px;
          border-radius: 15px;
          margin-bottom: 20px;
          border-left: 4px solid #7c4dff;
        }

        .hiw-step h3 {
          margin-top: 0;
          color: #fff;
        }
      `}</style>
    </>
  );
}