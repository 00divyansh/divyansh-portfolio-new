<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
}>()

// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})
</script>

<template>
  <div>
    <UCard class="text-center ring-2 ring-primary">
      <div class="space-y-8 py-8">
        <!-- Main Heading -->
        <div class="space-y-4">
          <h2>
            {{ title || "Open to New Opportunities" }}
          </h2>
          <p class="max-w-2xl mx-auto">
            {{
              description ||
              profile?.availability?.description ||
              "Open to full-time positions, technical leadership, and collaborative projects. Experienced with remote work, agile methodologies, and cross-functional team coordination."
            }}
          </p>
        </div>

        <!-- Value Points -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div class="flex items-center gap-3 justify-center">
            <div class="w-10 h-10 flex items-center justify-center">
              <UIcon name="i-ph-clock" size="3em" class="text-info" />
            </div>
            <div class="text-left">
              <div class="text-sm font-semibold">
                Quick Response
              </div>
              <div class="text-[10px]">Professional communication</div>
            </div>
          </div>

          <div class="flex items-center gap-3 justify-center">
            <div class="w-10 h-10 flex items-center justify-center">
              <UIcon name="i-ph-shield-check" size="3em" class="text-info" />
            </div>
            <div class="text-left">
              <div class="text-sm font-semibold">Quality Focus</div>
              <div class="text-[10px]">Excellence driven</div>
            </div>
          </div>

          <div class="flex items-center gap-3 justify-center">
            <div class="w-10 h-10 flex items-center justify-center">
              <UIcon name="i-ph-chat-circle" size="3em" class="text-info" />
            </div>
            <div class="text-left">
              <div class="text-sm font-semibold">Open Discussion</div>
              <div class="text-[10px]">Let's connect</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            :to="profile?.availability?.cta?.url || '/contact'"
            size="xl"
          >
            <UIcon name="i-ph-rocket-launch" />
            {{ profile?.availability?.cta?.text || "Let's Discuss Opportunities" }}
          </UButton>
          <UButton to="/services" variant="subtle" size="xl">
            <UIcon name="i-ph-briefcase" />
            View My Expertise
          </UButton>
          <!--
              <UButton
                href="https://cal.com/divyanshdixit"
                external
                size="xl"
                variant="soft"

              >
                <UIcon name="i-ph-calendar-check" />
                Book Free Consultation
              </UButton> -->
        </div>

        <!-- Availability Note -->
        <div v-if="profile?.availability?.status === 'available'">
          <UBadge variant="outline" size="xl">
            Available for new opportunities starting
            {{ profile?.availability?.startDate || "immediately" }}
          </UBadge>
        </div>
      </div>
    </UCard>
  </div>
</template>
