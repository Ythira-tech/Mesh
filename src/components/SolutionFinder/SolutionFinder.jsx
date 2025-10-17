import React, { useState } from 'react';
import './SolutionFinder.css';

const SolutionFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'openingType',
      question: "What type of opening do you need protection for?",
      options: [
        {
          value: 'sliding-door',
          label: 'Sliding Door',
          icon: '🚪',
          description: 'Large patio or balcony doors'
        },
        {
          value: 'french-door',
          label: 'French Door',
          icon: '🚶‍♂️',
          description: 'Double doors that swing open'
        },
        {
          value: 'window',
          label: 'Window',
          icon: '🪟',
          description: 'Standard or large windows'
        },
        {
          value: 'multiple',
          label: 'Multiple Openings',
          icon: '🏠',
          description: 'Whole house or several areas'
        }
      ]
    },
    {
      id: 'pets',
      question: "Do you have pets at home?",
      options: [
        {
          value: 'no-pets',
          label: 'No Pets',
          icon: '🙋‍♂️',
          description: 'Just human family members'
        },
        {
          value: 'cats',
          label: 'Cats',
          icon: '🐱',
          description: 'Curious feline friends'
        },
        {
          value: 'dogs',
          label: 'Dogs',
          icon: '🐶',
          description: 'Active canine companions'
        },
        {
          value: 'both',
          label: 'Both Cats & Dogs',
          icon: '🐾',
          description: 'Mixed pet household'
        }
      ]
    },
    {
      id: 'pestProblem',
      question: "What's your biggest pest concern?",
      options: [
        {
          value: 'mosquitoes',
          label: 'Mosquitoes',
          icon: '🦟',
          description: 'Biting mosquitoes and gnats'
        },
        {
          value: 'flies',
          label: 'Flies & Insects',
          icon: '🐜',
          description: 'House flies and crawling insects'
        },
        {
          value: 'all-pests',
          label: 'All Pests',
          icon: '🕷️',
          description: 'Multiple types of bugs'
        },
        {
          value: 'seasonal',
          label: 'Seasonal Issues',
          icon: '🍃',
          description: 'Specific times of year'
        }
      ]
    },
    {
      id: 'timeline',
      question: "When do you need installation?",
      options: [
        {
          value: 'urgent',
          label: 'ASAP',
          icon: '⚡',
          description: 'Within the next few days'
        },
        {
          value: 'week',
          label: 'This Week',
          icon: '📅',
          description: 'In the next 7 days'
        },
        {
          value: 'month',
          label: 'This Month',
          icon: '🗓️',
          description: 'Flexible timing'
        },
        {
          value: 'planning',
          label: 'Just Researching',
          icon: '🔍',
          description: 'Exploring options now'
        }
      ]
    }
  ];

  const solutions = {
    'sliding-door-no-pets-mosquitoes-urgent': {
      title: "Premium Sliding Door Mesh",
      description: "Heavy-duty magnetic screen for large sliding doors with extra-fine mosquito protection.",
      features: ["Extra-fine mosquito mesh", "Heavy-duty magnets", "Quick installation available"],
      price: "From $299"
    },
    'french-door-cats-flies-week': {
      title: "Pet-Safe French Door Solution",
      description: "Reinforced mesh designed to withstand curious cats while keeping flies out.",
      features: ["Pet-resistant mesh", "Double magnetic seal", "Easy pet access"],
      price: "From $349"
    },
    'window-dogs-all-pests-month': {
      title: "Secure Window Mesh",
      description: "Durable window screens that stand up to active dogs while blocking all pests.",
      features: ["Extra-strong frame", "All-pest protection", "Dog-proof design"],
      price: "From $189"
    },
    'multiple-both-seasonal-planning': {
      title: "Whole Home Protection Package",
      description: "Complete mesh solution for multiple openings with seasonal pest control.",
      features: ["Multi-opening discount", "Seasonal adaptability", "Professional consultation"],
      price: "Package from $799"
    }
    // Add more solution combinations as needed
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const getSolutionKey = () => {
    const key = questions.map(q => answers[q.id] || 'default').join('-');
    return solutions[key] ? key : 'sliding-door-no-pets-mosquitoes-urgent'; // Fallback solution
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const solution = solutions[getSolutionKey()];
    
    return (
      <section className="solution-finder">
        <div className="container">
          <div className="finder-header">
            <h2 className="finder-title">Your Perfect Mesh Solution!</h2>
            <p className="finder-subtitle">
              Based on your needs, here's our recommendation:
            </p>
          </div>

          <div className="results-container">
            <div className="solution-card">
              <div className="solution-badge">Recommended</div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              
              <div className="solution-features">
                {solution.features.map((feature, index) => (
                  <div key={index} className="feature">
                    <span className="feature-check">✅</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="solution-price">{solution.price}</div>
              
              <div className="solution-actions">
                <button className="btn btn-primary">
                  Get Free Installation Quote
                </button>
                <button className="btn btn-secondary" onClick={restartQuiz}>
                  Start Over
                </button>
              </div>
            </div>

            <div className="results-summary">
              <h4>Based on your answers:</h4>
              <div className="answers-list">
                {questions.map((question, index) => (
                  <div key={index} className="answer-item">
                    <span className="answer-question">{question.question}</span>
                    <span className="answer-value">
                      {question.options.find(opt => opt.value === answers[question.id])?.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section className="solution-finder" id="get-quote">
      <div className="container">
        <div className="finder-header">
          <h2 className="finder-title">Find Your Perfect Mesh Solution</h2>
          <p className="finder-subtitle">
            Answer 4 simple questions and get a personalized recommendation
          </p>
        </div>

        <div className="quiz-container">
          <div className="quiz-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-text">
              Question {currentStep + 1} of {questions.length}
            </div>
          </div>

          <div className="question-section">
            <h3 className="question-text">{currentQuestion.question}</h3>
            
            <div className="options-grid">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className="option-card"
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                >
                  <div className="option-icon">{option.icon}</div>
                  <div className="option-content">
                    <div className="option-label">{option.label}</div>
                    <div className="option-description">{option.description}</div>
                  </div>
                  <div className="option-arrow">→</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionFinder;