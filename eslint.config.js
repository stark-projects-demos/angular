import starkAccessibilityAngular from '@stark-lab-inc/stark-accessibility-angular';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  extends: [starkAccessibilityAngular.configs.recommended],
});