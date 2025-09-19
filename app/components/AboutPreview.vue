<script lang="ts" setup>
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})
</script>

<template>
  <div>
    <div v-if="profile" class="space-y-16">
      <!-- Header -->
      <div class="text-center space-y-6">
        <h2>Engineering Innovative Solutions</h2>

        <p class="max-w-4xl mx-auto">
          {{ profile.description }}
        </p>
      </div>

      <!-- Value Proposition Cards -->
      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Technical Excellence -->
        <UCard class="text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon name="i-ph-code" size="3em" class="text-info" />
              </div>
              <div class="space-y-3">
                <h3>Technical Excellence</h3>
                <p>
                  5+ years of deep technical expertise across full-stack 
                  development, AI/ML integration, and enterprise architecture.
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Proven Results -->
        <UCard class="text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon name="i-ph-chart-line-up" size="3em" class="text-info" />
              </div>
              <div class="space-y-3">
                <h3>Engineering Impact</h3>
                <p>
                  Led development of enterprise systems serving 100k+ users
                  with 99.9% uptime and 93% deployment efficiency improvements.
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Team Collaboration -->
        <UCard class="text-center h-full">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon name="i-ph-users" size="3em" class="text-info" />
              </div>
              <div class="space-y-3">
                <h3>Team Collaboration</h3>
                <p>
                  Experienced in cross-functional teamwork, mentoring developers,
                  and driving technical excellence in agile environments.
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
