<script setup lang="ts">
definePageMeta({
  title: "Centralized Logging Infrastructure - Divyansh Dixit",
  description:
    "Technical deep-dive into centralized logging infrastructure: solving observability challenges in distributed systems.",
})

useHead({
  title: "Centralized Logging Infrastructure - Divyansh Dixit",
  meta: [
    {
      name: "description",
      content:
        "Technical deep-dive into centralized logging infrastructure: solving observability challenges in distributed systems.",
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
        
        <h1>Centralized Logging Infrastructure</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Enterprise Observability & Log Management System
        </p>
        
        <div class="flex flex-wrap justify-center gap-4">
          <UBadge label="Elasticsearch" variant="outline" />
          <UBadge label="Logstash" variant="outline" />
          <UBadge label="Kibana" variant="outline" />
          <UBadge label="Kafka" variant="outline" />
          <UBadge label="Fluentd" variant="outline" />
          <UBadge label="Prometheus" variant="outline" />
          <UBadge label="Grafana" variant="outline" />
        </div>
      </div>

      <!-- Main Content -->
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <h2>Problem Statement</h2>
        <p>
          The organization's distributed architecture with 50+ microservices was generating massive amounts of unstructured logs scattered across multiple servers and containers. Debugging issues required SSHing into individual servers, making troubleshooting time-consuming and error-prone. The lack of centralized logging led to extended downtime, missed critical errors, and inability to perform root cause analysis effectively.
        </p>

        <h2>Technical Challenges</h2>
        <ul>
          <li><strong>Data Volume:</strong> Processing 10TB+ of logs daily from diverse sources</li>
          <li><strong>Log Formats:</strong> Standardizing logs from 20+ different application types</li>
          <li><strong>Real-time Processing:</strong> Sub-second log ingestion and indexing requirements</li>
          <li><strong>Data Retention:</strong> Balancing storage costs with compliance requirements</li>
          <li><strong>Search Performance:</strong> Fast queries across billions of log entries</li>
          <li><strong>High Availability:</strong> Zero data loss with system failures</li>
        </ul>

        <h2>Solution Architecture</h2>

        <h3>Data Pipeline Design</h3>
        <ul>
          <li><strong>Collection Layer:</strong> Fluentd agents on all nodes for log collection</li>
          <li><strong>Message Queue:</strong> Kafka for reliable log buffering and distribution</li>
          <li><strong>Processing Layer:</strong> Logstash for parsing, enrichment, and transformation</li>
          <li><strong>Storage Layer:</strong> Elasticsearch cluster with hot-warm-cold architecture</li>
          <li><strong>Visualization:</strong> Kibana dashboards with custom visualizations</li>
        </ul>

        <h3>Infrastructure Components</h3>
        <ul>
          <li><strong>Elasticsearch Cluster:</strong> 15-node cluster with 3 master, 6 data, 6 coordinator nodes</li>
          <li><strong>Kafka Cluster:</strong> 5-node cluster with replication factor of 3</li>
          <li><strong>Load Balancers:</strong> HAProxy for distributing ingestion load</li>
          <li><strong>Storage Tiers:</strong> NVMe SSDs for hot data, HDDs for warm/cold data</li>
        </ul>

        <h2>Technical Implementation</h2>

        <h3>Log Standardization</h3>
        <ul>
          <li><strong>Structured Logging:</strong> Enforced JSON format across all applications</li>
          <li><strong>Common Schema:</strong> Standardized field names and data types</li>
          <li><strong>Correlation IDs:</strong> Trace requests across multiple services</li>
          <li><strong>Contextual Metadata:</strong> Automatic enrichment with environment details</li>
        </ul>

        <h3>Processing Pipeline</h3>
        <ul>
          <li><strong>Multi-stage Parsing:</strong> Grok patterns for legacy log formats</li>
          <li><strong>Data Enrichment:</strong> GeoIP lookup, user agent parsing, field extraction</li>
          <li><strong>Filtering Rules:</strong> Noise reduction and sensitive data masking</li>
          <li><strong>Error Detection:</strong> Pattern matching for automatic anomaly detection</li>
        </ul>

        <h2>Problems Solved</h2>

        <h3>Operational Efficiency</h3>
        <ul>
          <li><strong>Rapid Troubleshooting:</strong> Reduced MTTR from hours to minutes</li>
          <li><strong>Proactive Monitoring:</strong> Alert on errors before user impact</li>
          <li><strong>Cross-Service Tracing:</strong> Complete request flow visibility</li>
          <li><strong>Historical Analysis:</strong> Pattern identification across time periods</li>
        </ul>

        <h3>Business Impact</h3>
        <ul>
          <li><strong>Downtime Reduction:</strong> 80% decrease in system downtime</li>
          <li><strong>Cost Savings:</strong> 50% reduction in debugging time</li>
          <li><strong>Compliance:</strong> Met regulatory log retention requirements</li>
          <li><strong>Performance Insights:</strong> Data-driven optimization decisions</li>
        </ul>

        <h2>Technical Outcomes</h2>

        <h3>Performance Metrics</h3>
        <ul>
          <li><strong>Ingestion Rate:</strong> Processing 1M+ events per second</li>
          <li><strong>Query Performance:</strong> Sub-second searches across 30-day window</li>
          <li><strong>Data Compression:</strong> 10:1 compression ratio reducing storage costs</li>
          <li><strong>Availability:</strong> 99.99% uptime with zero data loss</li>
        </ul>

        <h3>Scalability Achievements</h3>
        <ul>
          <li><strong>Linear Scaling:</strong> Horizontal scaling with predictable performance</li>
          <li><strong>Auto-scaling:</strong> Dynamic cluster sizing based on load</li>
          <li><strong>Multi-tenancy:</strong> Isolated indices for different teams/environments</li>
          <li><strong>Global Distribution:</strong> Multi-region deployment for global operations</li>
        </ul>

        <h2>Advanced Features</h2>

        <h3>Monitoring & Alerting</h3>
        <ul>
          <li><strong>Real-time Alerts:</strong> Watcher/ElastAlert for pattern-based alerting</li>
          <li><strong>Anomaly Detection:</strong> ML-based detection of unusual patterns</li>
          <li><strong>Custom Dashboards:</strong> Role-based dashboards for different teams</li>
          <li><strong>SLA Monitoring:</strong> Automated tracking of service level objectives</li>
        </ul>

        <h3>Security & Compliance</h3>
        <ul>
          <li><strong>Data Encryption:</strong> TLS in transit, encryption at rest</li>
          <li><strong>Access Control:</strong> RBAC with field-level security</li>
          <li><strong>Audit Logging:</strong> Complete audit trail of all access</li>
          <li><strong>PII Protection:</strong> Automatic masking of sensitive data</li>
        </ul>

        <h2>Innovation & Optimization</h2>

        <h3>Cost Optimization</h3>
        <ul>
          <li><strong>Tiered Storage:</strong> Hot-warm-cold architecture reducing costs by 60%</li>
          <li><strong>Index Lifecycle:</strong> Automated data movement based on age</li>
          <li><strong>Sampling Strategies:</strong> Intelligent sampling for high-volume logs</li>
          <li><strong>Resource Allocation:</strong> Dynamic shard allocation based on usage</li>
        </ul>

        <h3>Performance Optimization</h3>
        <ul>
          <li><strong>Index Templates:</strong> Optimized mappings for faster indexing</li>
          <li><strong>Query Optimization:</strong> Caching strategies for frequent queries</li>
          <li><strong>Bulk Operations:</strong> Batching for efficient indexing</li>
          <li><strong>Field Data Optimization:</strong> Doc values for aggregations</li>
        </ul>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-12">
          <h2>Key Achievements</h2>
          <ul>
            <li>Built centralized logging processing 10TB+ daily from 50+ microservices</li>
            <li>Achieved 1M+ events/second ingestion with sub-second query response</li>
            <li>Reduced MTTR from hours to minutes through rapid log analysis</li>
            <li>Implemented 10:1 compression ratio saving 60% on storage costs</li>
            <li>Delivered 99.99% availability with zero data loss architecture</li>
            <li>Enabled proactive monitoring preventing 80% of potential incidents</li>
          </ul>
          <p><strong>Technologies:</strong> Elasticsearch, Logstash, Kibana, Apache Kafka, Fluentd, Prometheus, Grafana, Python, Beats</p>
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