<script setup lang="ts">
definePageMeta({
  title: "AMCAT Universal Player - Divyansh Dixit",
  description:
    "Technical deep-dive into AMCAT Universal Player: assessment platform architecture, implementation details, and scalability achievements.",
})

useHead({
  title: "AMCAT Universal Player - Divyansh Dixit",
  meta: [
    {
      name: "description",
      content:
        "Technical deep-dive into AMCAT Universal Player: assessment platform architecture, implementation details, and scalability achievements.",
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
        
        <h1>AMCAT Universal Player</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Enterprise Assessment Platform & Skill Evaluation System
        </p>
        
        <div class="flex flex-wrap justify-center gap-4">
          <UBadge label="Angular" variant="outline" />
          <UBadge label="TypeScript" variant="outline" />
          <UBadge label="Spring Boot" variant="outline" />
          <UBadge label="Java" variant="outline" />
          <UBadge label="PostgreSQL" variant="outline" />
          <UBadge label="Redis" variant="outline" />
          <UBadge label="AWS" variant="outline" />
        </div>
      </div>

      <!-- Project Image -->
      <div class="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <img
          src="/assets/css/opq.png"
          alt="AMCAT Universal Player"
          class="max-h-full max-w-full object-contain rounded-lg"
        />
      </div>

      <!-- Main Content -->
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <h2>Project Overview</h2>
        <p>
          Developed the AMCAT Universal Player, a comprehensive assessment platform that delivers standardized skill evaluations across multiple domains. The system supports large-scale testing with advanced proctoring, real-time analytics, and seamless integration with enterprise HR systems.
        </p>

        <h2>Technical Architecture</h2>

        <h3>Frontend Architecture</h3>
        <ul>
          <li><strong>Framework:</strong> Angular 15+ with TypeScript for enterprise-grade development</li>
          <li><strong>State Management:</strong> NgRx for complex application state handling</li>
          <li><strong>UI Framework:</strong> Angular Material with custom enterprise theming</li>
          <li><strong>Testing Suite:</strong> Jasmine and Karma for comprehensive unit testing</li>
          <li><strong>Performance:</strong> Lazy loading modules and OnPush change detection</li>
        </ul>

        <h3>Backend Architecture</h3>
        <ul>
          <li><strong>Framework:</strong> Spring Boot with Java 17 for robust enterprise services</li>
          <li><strong>Database:</strong> PostgreSQL with JPA/Hibernate for data persistence</li>
          <li><strong>Caching:</strong> Redis for session management and performance optimization</li>
          <li><strong>Security:</strong> Spring Security with OAuth 2.0 and JWT authentication</li>
          <li><strong>Messaging:</strong> Apache Kafka for event-driven architecture</li>
          <li><strong>Monitoring:</strong> Micrometer with Prometheus for application metrics</li>
        </ul>

        <h2>Core Features</h2>

        <h3>1. Comprehensive Assessment Engine</h3>
        <ul>
          <li>Multi-domain skill assessment with adaptive questioning</li>
          <li>Support for multiple question types (MCQ, coding, scenario-based)</li>
          <li>Dynamic difficulty adjustment based on candidate performance</li>
          <li>Customizable assessment templates and scoring algorithms</li>
        </ul>

        <h3>2. Advanced Proctoring System</h3>
        <ul>
          <li>Real-time video monitoring with AI-powered behavior detection</li>
          <li>Browser lockdown and tab monitoring capabilities</li>
          <li>Screen recording with automated suspicious activity flagging</li>
          <li>Identity verification through multiple authentication methods</li>
        </ul>

        <h3>3. Enterprise Integration</h3>
        <ul>
          <li>RESTful APIs for seamless HRIS and ATS integration</li>
          <li>Single Sign-On (SSO) support with SAML and OpenID Connect</li>
          <li>Bulk candidate management with CSV import/export</li>
          <li>Custom branding and white-label solutions</li>
        </ul>

        <h3>4. Real-time Analytics & Reporting</h3>
        <ul>
          <li>Live assessment monitoring dashboard</li>
          <li>Comprehensive performance analytics and benchmarking</li>
          <li>Automated report generation with customizable templates</li>
          <li>Statistical analysis and trend identification</li>
        </ul>

        <h2>Technical Achievements</h2>

        <h3>Scalability & Performance</h3>
        <ul>
          <li><strong>High Concurrency:</strong> Support for 10,000+ simultaneous test-takers</li>
          <li><strong>Load Balancing:</strong> Horizontal scaling with container orchestration</li>
          <li><strong>Database Optimization:</strong> Query optimization achieving sub-100ms response times</li>
          <li><strong>Caching Strategy:</strong> Multi-level caching reducing database load by 70%</li>
        </ul>

        <h3>Security & Compliance</h3>
        <ul>
          <li><strong>Data Encryption:</strong> End-to-end encryption for all assessment data</li>
          <li><strong>GDPR Compliance:</strong> Complete data privacy and protection implementation</li>
          <li><strong>Secure Testing:</strong> Advanced anti-cheating measures and audit trails</li>
          <li><strong>Infrastructure Security:</strong> AWS security best practices and compliance</li>
        </ul>

        <h3>Innovation & User Experience</h3>
        <ul>
          <li><strong>Adaptive UI:</strong> Responsive design supporting all device types</li>
          <li><strong>Accessibility:</strong> WCAG 2.1 AA compliance for inclusive design</li>
          <li><strong>Offline Capability:</strong> Progressive Web App features for connectivity issues</li>
          <li><strong>Multi-language Support:</strong> Internationalization for global deployment</li>
        </ul>

        <h2>Enterprise Impact</h2>

        <h3>Business Metrics</h3>
        <ul>
          <li><strong>User Base:</strong> Successfully deployed for 500+ enterprise clients</li>
          <li><strong>Assessment Volume:</strong> Processing 1M+ assessments annually</li>
          <li><strong>Reliability:</strong> 99.9% uptime with zero data loss incidents</li>
          <li><strong>Performance:</strong> 60% reduction in assessment completion time</li>
        </ul>

        <h3>Technical Excellence</h3>
        <ul>
          <li><strong>Code Quality:</strong> 90%+ code coverage with automated testing</li>
          <li><strong>DevOps:</strong> CI/CD pipeline with automated deployment and monitoring</li>
          <li><strong>Documentation:</strong> Comprehensive API documentation and user guides</li>
          <li><strong>Maintenance:</strong> Proactive monitoring with automated issue detection</li>
        </ul>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-12">
          <h2>Key Technical Contributions</h2>
          <ul>
            <li>Architected scalable microservices supporting 10,000+ concurrent users</li>
            <li>Implemented advanced proctoring system with AI-powered monitoring</li>
            <li>Built comprehensive analytics engine with real-time reporting</li>
            <li>Developed enterprise-grade security framework with multi-factor authentication</li>
            <li>Optimized database performance achieving 70% faster query execution</li>
            <li>Delivered 99.9% system uptime with automated monitoring and alerting</li>
          </ul>
          <p><strong>Technologies:</strong> Angular, TypeScript, Spring Boot, Java, PostgreSQL, Redis, AWS, Kafka, Spring Security, NgRx</p>
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
          to="https://www.shl.com/products/assessments/personality-assessment/shl-occupational-personality-questionnaire-opq/"
          external
          variant="solid"
        >
          <UIcon name="i-ph-external-link" />
          Visit SHL Platform
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