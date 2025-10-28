# Emergency Brain 360 - AI-Powered Emergency Triage Dashboard

Emergency Brain 360 is an advanced AI-powered emergency triage dashboard application designed to assist healthcare professionals in rapidly assessing and prioritizing patient cases in emergency departments. The system leverages Google's Gemini AI to provide intelligent triage scoring, vital sign analysis, and treatment recommendations.

## 🏥 Key Features

### Patient Management
- **Patient List View**: Real-time display of active patients in the triage queue
- **Patient Detail View**: Comprehensive patient information including vital signs, symptoms, and AI-generated assessments
- **New Patient Triage**: Intake form for adding new patients to the system
- **Patient Discharge**: Workflow for discharging patients from the active queue
- **Archive & Discharge Views**: Historical records of all patients and discharged cases

### AI-Powered Triage System
- **Intelligent Scoring Algorithm**: Rule-based triage scoring enhanced by AI analysis
- **Urgency Classification**: Automatic categorization into Green (Low), Yellow (Medium), or Red (High) urgency levels
- **Vital Signs Analysis**: AI interpretation of patient vital signs compared to normal ranges
- **Clinical Recommendations**: AI-generated treatment suggestions and follow-up guidance
- **Triage Summaries**: Concise clinical summaries for quick decision-making

### Data Visualization
- **Severity Distribution Chart**: Visual representation of patient urgency levels
- **Vital Signs Charts**: Graphical displays of patient vital statistics
- **Symptom Analysis**: Breakdown of presenting symptoms across the patient population
- **Real-time Dashboard**: Live updates of emergency department metrics

### Technical Features
- **Local Storage**: Client-side data persistence using browser localStorage
- **Responsive Design**: Mobile-friendly interface optimized for various screen sizes
- **Interactive UI**: Modern React-based interface with smooth animations and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm package manager
- Google Gemini API key (for AI features)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd emergency-brain-360
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a [.env.local](.env.local) file in the root directory and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the production-ready application
- `npm run preview` - Previews the built application locally

## 📊 Application Architecture

### Core Components
- **App.tsx**: Main application component managing state and routing
- **Header.tsx**: Navigation header with view switching controls
- **PatientList.tsx**: Displays active patients with triage priority indicators
- **PatientDetail.tsx**: Detailed view of individual patient information
- **Dashboard.tsx**: Overview panel with statistical charts and metrics
- **NewPatientForm.tsx**: Intake form for adding new patients to the system
- **ArchiveView.tsx**: Historical view of all patient records
- **DischargedView.tsx**: Records of discharged patients

### Services Layer
- **geminiService.ts**: Integration with Google Gemini AI for intelligent analysis
- **patientDBService.ts**: Client-side database management using localStorage
- **triageService.ts**: Business logic for calculating triage scores and classifications

### Data Models
- **types.ts**: TypeScript interfaces defining patient data structures
- **patientData.ts**: Seed data for initial patient records

### UI Components
- **Charts**: Recharts-based visualizations for data representation
- **SparklesWelcomePage.tsx**: Animated welcome screen with particle effects
- **Custom UI Elements**: Specialized components for medical data presentation

## 🤖 AI Integration

The application integrates with Google's Gemini AI to enhance clinical decision-making:

### AI Capabilities
1. **Vital Signs Analysis**: Compares patient vitals to normal ranges and highlights abnormalities
2. **Triage Scoring Explanation**: Provides reasoning behind the calculated urgency scores
3. **Treatment Recommendations**: Generates personalized care suggestions based on patient data
4. **Clinical Summaries**: Creates concise summaries for dashboard display

### Fallback Behavior
When the GEMINI_API_KEY is not configured, the application gracefully degrades to rule-based triage scoring while maintaining full functionality of non-AI features. Clear notifications inform users when AI features are unavailable.

## 🔧 Technical Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6.2
- **State Management**: React Hooks
- **Styling**: Tailwind CSS
- **Data Visualization**: Recharts
- **Animations**: Framer Motion
- **Particle Effects**: tsparticles
- **AI Integration**: Google Generative AI SDK
- **Persistence**: Browser localStorage

## 📈 Triage Scoring System

The application employs a weighted scoring system to determine patient urgency:

| Criteria | Points |
|----------|--------|
| Chest pain | +4 |
| Shortness of breath | +4 |
| Temperature > 101°F | +2 |
| Oxygen saturation < 90% | +3 |
| Heart rate > 120 bpm | +2 |
| Respiratory rate > 24/min | +2 |
| Unconsciousness | +5 |
| Semi-consciousness | +3 |
| Age > 65 years | +2 |
| Presence of comorbidities | +2 |

### Urgency Classification
- **Red (8+ points)**: Immediate attention required
- **Yellow (4-7 points)**: Prompt evaluation needed
- **Green (0-3 points)**: Routine care appropriate

## 🛡️ Data Privacy & Security

- All patient data is stored locally in the browser
- No patient information is transmitted to external servers (except for AI analysis)
- Healthcare professionals are responsible for securing devices used to access the application
- PHI compliance is maintained through local storage and lack of external data transmission

## 🤝 Contributing

Contributions to improve Emergency Brain 360 are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powering the intelligent triage features
- Recharts for data visualization components
- The open-source community for various libraries and tools
- Healthcare professionals who provided input on triage workflows

## 📞 Support

For issues, questions, or feedback, please [open an issue](../../issues) on GitHub.
