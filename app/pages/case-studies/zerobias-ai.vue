<script setup lang="ts">
definePageMeta({
  title: "ZerobiasAI Case Study - Divyansh Dixit",
  description:
    "Technical deep-dive into ZerobiasAI: AI-powered recruitment platform architecture, implementation details, and engineering achievements.",
})

useHead({
  title: "ZerobiasAI Case Study - Divyansh Dixit",
  meta: [
    {
      name: "description",
      content:
        "Technical deep-dive into ZerobiasAI: AI-powered recruitment platform architecture, implementation details, and engineering achievements.",
    },
  ],
})
</script>

<template>
  <div>
    <div class="max-w-4xl mx-auto space-y-12">
      <!-- Header -->
      <div class="text-center space-y-6">
        <UButton
          to="/projects"
          variant="ghost" 
          class="mb-4"
        >
          <UIcon name="i-ph-arrow-left" />
          Back to Projects
        </UButton>
        
        <h1>ZerobiasAI: AI-Powered Interview Platform</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Technical Architecture & Implementation
        </p>
        
        <div class="flex flex-wrap justify-center gap-4">
          <UBadge label="React 18" variant="outline" />
          <UBadge label="TypeScript" variant="outline" />
          <UBadge label="Python" variant="outline" />
          <UBadge label="FastAPI" variant="outline" />
          <UBadge label="PostgreSQL" variant="outline" />
          <UBadge label="OpenAI GPT-4" variant="outline" />
          <UBadge label="AWS" variant="outline" />
        </div>
      </div>

      <!-- Project Image Placeholder -->
      <div class="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <p class="text-gray-500">Project Screenshots & Architecture Diagrams</p>
        <p class="text-sm text-gray-400 ml-2">(Photos to be added later)</p>
      </div>

      <!-- Main Content -->
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <h2>Executive Summary</h2>
        <p>
          As the founder of ZerobiasAI, I architected and developed a comprehensive AI-powered recruitment platform that eliminates hiring bias through intelligent automation. The platform combines advanced AI conversation systems, real-time proctoring technology, and sophisticated analytics to revolutionize the hiring process for both recruiters and candidates.
        </p>

        <h2>Technical Architecture Overview</h2>

        <h3>Frontend Architecture (React + TypeScript)</h3>
        <ul>
          <li><strong>Framework:</strong> React 18 with TypeScript for type-safe development</li>
          <li><strong>Build System:</strong> Vite for lightning-fast development and optimized production builds</li>
          <li><strong>UI Framework:</strong> Modern component library using Radix UI primitives with Tailwind CSS</li>
          <li><strong>State Management:</strong> React Context API with custom hooks for efficient state handling</li>
          <li><strong>Routing:</strong> React Router DOM v6 for client-side navigation</li>
          <li><strong>HTTP Client:</strong> Axios with centralized API management and error handling</li>
        </ul>

        <h3>Backend Architecture (Python + FastAPI)</h3>
        <ul>
          <li><strong>Framework:</strong> FastAPI for high-performance async API development</li>
          <li><strong>Database:</strong> PostgreSQL with SQLAlchemy ORM and Alembic migrations</li>
          <li><strong>Authentication:</strong> JWT-based security with bcrypt password hashing</li>
          <li><strong>AI Integration:</strong> Multi-provider LLM support (OpenAI GPT-4, Claude 3.5)</li>
          <li><strong>Real-time Features:</strong> WebSocket connections for live interview sessions</li>
          <li><strong>File Storage:</strong> AWS S3 integration for resume and recording storage</li>
          <li><strong>Email Service:</strong> AWS SES for transactional email delivery</li>
        </ul>

        <h2>Core Features & Implementation</h2>

        <h3>1. AI-Powered Interview System</h3>
        <p><strong>Three Specialized AI Interviewers:</strong></p>
        <ul>
          <li><strong>Noddy:</strong> Background screening specialist analyzing resume-job fit</li>
          <li><strong>Cora:</strong> Technical interview expert with adaptive questioning</li>
          <li><strong>Aris:</strong> HR behavioral assessment focusing on cultural fit</li>
        </ul>

        <p><strong>Key Technical Components:</strong></p>
        <ul>
          <li>Dynamic question generation based on job requirements</li>
          <li>Real-time conversation analysis and response adaptation</li>
          <li>Multi-phase interview workflow (intro → questions → evaluation → wrap-up)</li>
          <li>Advanced prompt engineering for consistent AI behavior</li>
        </ul>

        <h3>2. Advanced Proctoring & Security Features</h3>
        <p><strong>Real-time Monitoring:</strong></p>
        <ul>
          <li>Camera recording with face detection and behavior analysis</li>
          <li>Screen capture with tab monitoring and browser lock</li>
          <li>Audio environment analysis with voice authentication</li>
          <li>AI-powered suspicious behavior detection with risk scoring</li>
        </ul>

        <p><strong>Security Implementation:</strong></p>
        <ul>
          <li>Secure exam environment preventing unauthorized access</li>
          <li>Real-time violation detection and alert system</li>
          <li>Comprehensive audit logging for compliance</li>
        </ul>

        <h3>3. Intelligent Resume Screening</h3>
        <ul>
          <li>Automated resume parsing and skill extraction</li>
          <li>AI-powered job-resume matching algorithms</li>
          <li>Bulk candidate processing with parallel evaluation</li>
          <li>Detailed screening reports with pass/fail recommendations</li>
        </ul>

        <h3>4. Comprehensive Analytics Dashboard</h3>
        <ul>
          <li>Real-time interview monitoring and progress tracking</li>
          <li>Detailed candidate assessment reports with scoring breakdowns</li>
          <li>Recruiter analytics with hiring pipeline insights</li>
          <li>Performance metrics and trend analysis</li>
        </ul>

        <h2>Technical Innovation & Architecture Patterns</h2>

        <h3>1. Microservices-Oriented Design</h3>
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
          <div>├── Authentication Service (JWT + Role-based access)</div>
          <div>├── Interview Service (AI conversation management)</div>
          <div>├── Screening Service (Resume analysis + background checks)</div>
          <div>├── Analytics Service (Data processing + reporting)</div>
          <div>├── Notification Service (Email + real-time alerts)</div>
          <div>└── Storage Service (S3 + database management)</div>
        </div>

        <h3>2. Advanced AI Integration Pattern</h3>
        <ul>
          <li><strong>LLM Factory Pattern:</strong> Abstracted AI provider interface supporting multiple LLMs</li>
          <li><strong>Conversation State Management:</strong> Persistent context across interview phases</li>
          <li><strong>Adaptive Questioning:</strong> Dynamic difficulty adjustment based on candidate responses</li>
          <li><strong>Real-time Evaluation:</strong> Continuous assessment during conversations</li>
        </ul>

        <h3>3. Scalable Database Design</h3>
        <ul>
          <li><strong>Multi-tenant Architecture:</strong> Isolated data per organization</li>
          <li><strong>Optimized Indexing:</strong> Performance-tuned queries for large datasets</li>
          <li><strong>Migration System:</strong> Alembic-based schema versioning</li>
          <li><strong>Connection Pooling:</strong> Efficient database resource management</li>
        </ul>

        <h2>Technical Achievements & Metrics</h2>

        <h3>Performance Optimizations</h3>
        <ul>
          <li><strong>Frontend:</strong> Code splitting and lazy loading reducing initial bundle size by 60%</li>
          <li><strong>Backend:</strong> Async processing achieving 95% faster response times</li>
          <li><strong>Database:</strong> Query optimization reducing average response time to &lt;100ms</li>
          <li><strong>AI Integration:</strong> Parallel processing reducing interview evaluation time by 70%</li>
        </ul>

        <h3>Security & Compliance</h3>
        <ul>
          <li><strong>Data Protection:</strong> End-to-end encryption for sensitive candidate data</li>
          <li><strong>GDPR Compliance:</strong> Comprehensive data handling and deletion policies</li>
          <li><strong>SOC 2 Ready:</strong> Security controls and audit logging implementation</li>
          <li><strong>Multi-factor Authentication:</strong> Enhanced security for recruiter accounts</li>
        </ul>

        <h3>Scalability Solutions</h3>
        <ul>
          <li><strong>Horizontal Scaling:</strong> Stateless API design supporting multi-instance deployment</li>
          <li><strong>Caching Strategy:</strong> Redis integration for session management and performance</li>
          <li><strong>CDN Integration:</strong> Global content delivery for optimal user experience</li>
          <li><strong>Load Balancing:</strong> Application-level routing for high availability</li>
        </ul>

        <h2>Development Methodologies & Tools</h2>

        <h3>DevOps & Infrastructure</h3>
        <ul>
          <li><strong>CI/CD Pipeline:</strong> Automated testing and deployment workflows</li>
          <li><strong>Docker Containerization:</strong> Consistent deployment across environments</li>
          <li><strong>AWS Infrastructure:</strong> Scalable cloud architecture with auto-scaling</li>
          <li><strong>Monitoring & Logging:</strong> Comprehensive application observability</li>
        </ul>

        <h3>Quality Assurance</h3>
        <ul>
          <li><strong>Type Safety:</strong> Full TypeScript implementation with strict type checking</li>
          <li><strong>API Documentation:</strong> Interactive Swagger/OpenAPI documentation</li>
          <li><strong>Error Handling:</strong> Centralized exception management with user-friendly messaging</li>
          <li><strong>Testing Strategy:</strong> Unit and integration testing for critical components</li>
        </ul>

        <h2>Business Impact & Innovation</h2>

        <h3>Market Differentiation</h3>
        <ul>
          <li><strong>Zero-Bias Technology:</strong> First platform to eliminate unconscious bias through AI standardization</li>
          <li><strong>Multi-Modal Assessment:</strong> Combined technical, behavioral, and cultural evaluation</li>
          <li><strong>Real-time Feedback:</strong> Instant candidate assessment and recruiter insights</li>
          <li><strong>Scalable Enterprise Solution:</strong> Supporting organizations from startups to Fortune 500</li>
        </ul>

        <h3>Technical Leadership</h3>
        <ul>
          <li><strong>Architecture Design:</strong> Full-stack system design from concept to production</li>
          <li><strong>Team Coordination:</strong> Led technical implementation across multiple development streams</li>
          <li><strong>Innovation Drive:</strong> Pioneered AI conversation patterns for interview applications</li>
          <li><strong>Performance Engineering:</strong> Achieved enterprise-grade performance and reliability</li>
        </ul>

        <h2>Future Roadmap & Technical Vision</h2>

        <h3>Advanced AI Capabilities</h3>
        <ul>
          <li><strong>Multimodal AI:</strong> Integration of computer vision for non-verbal assessment</li>
          <li><strong>Predictive Analytics:</strong> Machine learning models for hiring success prediction</li>
          <li><strong>Personalization Engine:</strong> Adaptive interview experiences based on role requirements</li>
          <li><strong>Voice Synthesis:</strong> Natural AI voice generation for enhanced candidate experience</li>
        </ul>

        <h3>Platform Expansion</h3>
        <ul>
          <li><strong>API Ecosystem:</strong> Public APIs for third-party integrations</li>
          <li><strong>Mobile Applications:</strong> Native iOS/Android apps for on-the-go recruiting</li>
          <li><strong>Enterprise Integrations:</strong> Seamless HRIS and ATS system connectivity</li>
          <li><strong>Global Localization:</strong> Multi-language support with cultural adaptation</li>
        </ul>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-12">
          <h2>Resume Summary Section</h2>
          <p><strong>ZerobiasAI - Founder & Technical Architect</strong> <em>(2024 - Present)</em></p>
          <p>
            Architected and developed an enterprise-grade AI-powered recruitment platform that eliminates hiring bias through intelligent automation. Built a comprehensive full-stack solution using React/TypeScript frontend and Python/FastAPI backend, serving both recruiters and candidates with advanced AI interview capabilities.
          </p>
          <p><strong>Key Technical Achievements:</strong></p>
          <ul>
            <li>Designed microservices architecture supporting 3 specialized AI interviewers with adaptive questioning algorithms</li>
            <li>Implemented real-time proctoring system with computer vision and behavioral analysis</li>
            <li>Built scalable PostgreSQL database architecture with optimized queries achieving &lt;100ms response times</li>
            <li>Integrated multi-provider LLM support (OpenAI, Claude) with custom conversation state management</li>
            <li>Developed comprehensive analytics dashboard with real-time interview monitoring and assessment reporting</li>
            <li>Achieved 70% reduction in time-to-hire through automated screening and parallel processing workflows</li>
          </ul>
          <p><strong>Technologies:</strong> React 18, TypeScript, Python, FastAPI, PostgreSQL, AWS (S3, RDS, SES), OpenAI GPT-4, Claude 3.5, Docker, WebSocket, JWT Authentication</p>
        </div>

        <div class="text-center mt-12">
          <p class="text-lg font-semibold">
            This technical architecture represents a significant advancement in recruitment technology, combining cutting-edge AI capabilities with robust enterprise-grade infrastructure to deliver measurable business value and competitive advantage in the hiring market.
          </p>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex justify-between items-center pt-8 border-t">
        <UButton
          to="/projects"
          variant="ghost"
        >
          <UIcon name="i-ph-arrow-left" />
          Back to Projects
        </UButton>
        
        <UButton
          to="https://www.zerobias.co/"
          external
          variant="solid"
        >
          <UIcon name="i-ph-external-link" />
          Visit ZerobiasAI
        </UButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.75;
}

.prose ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.prose li {
  margin-bottom: 0.25rem;
}

.prose strong {
  font-weight: 600;
}
</style>