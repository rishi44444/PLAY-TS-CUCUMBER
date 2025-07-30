import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}
  // Common actions can be added here, e.g., navigation, waiting, etc.
} 