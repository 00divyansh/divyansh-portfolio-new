<script setup lang="ts">
definePageMeta({
  title: "TC+ ATS Integration Platform - Divyansh Dixit",
  description:
    "Technical deep-dive into TC+ ATS Integration Platform: solving recruitment workflow challenges through seamless system integration.",
})

useHead({
  title: "TC+ ATS Integration Platform - Divyansh Dixit",
  meta: [
    {
      name: "description",
      content:
        "Technical deep-dive into TC+ ATS Integration Platform: solving recruitment workflow challenges through seamless system integration.",
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
        
        <h1>TC+ ATS Integration Platform</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Unified Recruitment System Integration & Workflow Automation
        </p>
        
        <div class="flex flex-wrap justify-center gap-4">
          <UBadge label="Node.js" variant="outline" />
          <UBadge label="TypeScript" variant="outline" />
          <UBadge label="REST APIs" variant="outline" />
          <UBadge label="GraphQL" variant="outline" />
          <UBadge label="PostgreSQL" variant="outline" />
          <UBadge label="Redis" variant="outline" />
          <UBadge label="Docker" variant="outline" />
        </div>
      </div>

      <!-- Main Content -->
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <h2>Problem Statement</h2>
        <p>
          Organizations were struggling with fragmented recruitment workflows across multiple applicant tracking systems (ATS). The lack of integration led to data silos, manual data entry, delayed candidate processing, and poor visibility into the recruitment pipeline. HR teams needed a unified platform to seamlessly connect various ATS platforms while maintaining data consistency and workflow automation.
        </p>

        <h2>Technical Challenges</h2>
        <ul>
          <li><strong>API Heterogeneity:</strong> Each ATS had different API structures, authentication methods, and data formats</li>
          <li><strong>Data Synchronization:</strong> Real-time bi-directional sync across multiple systems without data conflicts</li>
          <li><strong>Rate Limiting:</strong> Managing API rate limits across different providers while maintaining performance</li>
          <li><strong>Error Handling:</strong> Graceful recovery from API failures and network issues</li>
          <li><strong>Data Transformation:</strong> Complex mapping between different data schemas and formats</li>
        </ul>

        <h2>Solution Architecture</h2>

        <h3>Integration Layer Design</h3>
        <ul>
          <li><strong>Adapter Pattern:</strong> Built provider-specific adapters for each ATS platform</li>
          <li><strong>Unified API Gateway:</strong> Single GraphQL endpoint abstracting all ATS differences</li>
          <li><strong>Event-Driven Architecture:</strong> Webhook-based real-time updates from all platforms</li>
          <li><strong>Queue Management:</strong> Message queuing for reliable async processing</li>
        </ul>

        <h3>Data Management Strategy</h3>
        <ul>
          <li><strong>Central Data Store:</strong> PostgreSQL as single source of truth with optimized indexing</li>
          <li><strong>Caching Layer:</strong> Redis for frequently accessed data and session management</li>
          <li><strong>Conflict Resolution:</strong> Smart merge algorithms for handling concurrent updates</li>
          <li><strong>Audit Trail:</strong> Complete history of all data changes and synchronizations</li>
        </ul>

        <h2>Technical Implementation</h2>

        <h3>Key Components Developed</h3>
        <ul>
          <li><strong>Universal Connector Framework:</strong> Reusable connector architecture supporting 15+ ATS platforms</li>
          <li><strong>Data Transformation Engine:</strong> Rule-based engine for complex field mappings</li>
          <li><strong>Sync Orchestrator:</strong> Intelligent sync scheduling with conflict detection</li>
          <li><strong>Error Recovery System:</strong> Automated retry logic with exponential backoff</li>
          <li><strong>Monitoring Dashboard:</strong> Real-time integration health and performance metrics</li>
        </ul>

        <h3>Integration Features</h3>
        <ul>
          <li><strong>Bi-directional Sync:</strong> Real-time data synchronization in both directions</li>
          <li><strong>Bulk Operations:</strong> Efficient batch processing for large data migrations</li>
          <li><strong>Field Mapping UI:</strong> Visual interface for custom field mappings</li>
          <li><strong>Webhook Management:</strong> Automatic webhook registration and lifecycle management</li>
        </ul>

        <h2>Problems Solved</h2>

        <h3>Operational Efficiency</h3>
        <ul>
          <li><strong>Eliminated Manual Entry:</strong> Automated data flow reducing 90% manual work</li>
          <li><strong>Unified Dashboard:</strong> Single interface for all recruitment activities</li>
          <li><strong>Real-time Updates:</strong> Instant candidate status synchronization across platforms</li>
          <li><strong>Reduced Errors:</strong> Automated validation preventing data inconsistencies</li>
        </ul>

        <h3>Business Impact</h3>
        <ul>
          <li><strong>Time Savings:</strong> 75% reduction in recruitment coordination time</li>
          <li><strong>Faster Hiring:</strong> 40% decrease in time-to-hire through automation</li>
          <li><strong>Cost Reduction:</strong> Eliminated need for multiple ATS licenses</li>
          <li><strong>Improved Visibility:</strong> Complete pipeline visibility across all systems</li>
        </ul>

        <h2>Technical Outcomes</h2>

        <h3>Performance Metrics</h3>
        <ul>
          <li><strong>Integration Speed:</strong> Processing 10,000+ API calls per minute</li>
          <li><strong>Sync Latency:</strong> Sub-second data synchronization across platforms</li>
          <li><strong>Uptime:</strong> 99.95% availability with zero data loss</li>
          <li><strong>Error Rate:</strong> Less than 0.1% failed synchronizations</li>
        </ul>

        <h3>Scalability Achievements</h3>
        <ul>
          <li><strong>Platform Support:</strong> Successfully integrated 15+ ATS platforms</li>
          <li><strong>Data Volume:</strong> Handling 1M+ candidate records across systems</li>
          <li><strong>Concurrent Users:</strong> Supporting 5,000+ concurrent users</li>
          <li><strong>API Throughput:</strong> Managing 100M+ API calls monthly</li>
        </ul>

        <h2>Innovation & Best Practices</h2>

        <h3>Technical Innovations</h3>
        <ul>
          <li><strong>Smart Rate Limiting:</strong> Adaptive rate limiting based on API response patterns</li>
          <li><strong>Predictive Caching:</strong> ML-based cache warming for frequently accessed data</li>
          <li><strong>Auto-discovery:</strong> Automatic detection of API schema changes</li>
          <li><strong>Self-healing:</strong> Automated error recovery and connection restoration</li>
        </ul>

        <h3>Engineering Excellence</h3>
        <ul>
          <li><strong>Microservices Architecture:</strong> Loosely coupled services for independent scaling</li>
          <li><strong>Container Orchestration:</strong> Docker and Kubernetes for deployment flexibility</li>
          <li><strong>API Documentation:</strong> Comprehensive OpenAPI specs with interactive docs</li>
          <li><strong>Testing Strategy:</strong> 85%+ code coverage with integration testing</li>
        </ul>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-12">
          <h2>Key Achievements</h2>
          <ul>
            <li>Unified 15+ ATS platforms into single integration framework</li>
            <li>Reduced recruitment coordination time by 75% through automation</li>
            <li>Achieved sub-second synchronization across all connected systems</li>
            <li>Processed 100M+ API calls monthly with 99.95% uptime</li>
            <li>Eliminated data silos and manual entry errors completely</li>
            <li>Built self-healing system with automatic error recovery</li>
          </ul>
          <p><strong>Technologies:</strong> Node.js, TypeScript, GraphQL, REST APIs, PostgreSQL, Redis, Docker, Kubernetes, RabbitMQ</p>
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