<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  provideUseId,
} from "@headlessui/vue";

interface BaseSelectProps {
  modelValue: string | number;
  options: string[];
  default: string;
  onUpdate?: (value: string) => void;
}

interface BaseSelectEmits {
  (event: "update:modelValue", value: string): void;
}

defineProps<BaseSelectProps>();
const emit = defineEmits<BaseSelectEmits>();

provideUseId(() => useId());
</script>

<template>
  <div class="">
    <Listbox
      :model-value="modelValue"
      @update:model-value="
        (event) => {
          emit('update:modelValue', event);
        }
      "
    >
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-xl bg-white py-2 pl-3 pr-10 text-left text-lg sm:text-sm border border-gray-400"
        >
          <span class="block truncate">{{ modelValue }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <Icon name="uil:arrow" class="rotate-90" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="option in options"
              :key="option"
              :value="option"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ option }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <Icon name="uil:check" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
